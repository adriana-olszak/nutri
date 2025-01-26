import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';
import { StatsDService } from '@nutri/server-metrics';
import axios, { AxiosError } from 'axios';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BEST_MATCH_SCHEMA, BestMatch, INGREDIENT_ANALYSIS_SCHEMA, IngredientAnalysis } from '../types/llm.types';


interface CompletionRequest {
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

interface CompletionResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
  }>;
}

@Injectable()
export class LLMService {
  logger = new Logger(LLMService.name);
  constructor(
    private readonly config: ConfigService,
    private readonly metrics: StatsDService,
  ) {

  }

  async analyzeIngredient(ingredient: string): Promise<IngredientAnalysis> {
      this.logger.debug(`Analyzing ingredient: ${ingredient}`);

      try {
        const result = await this.complete({
          messages: [
            {
              role: 'system',
              content: 'You are a food ingredient expert. Analyze ingredients and provide structured information.',
            },
            {
              role: 'user',
              content: `Analyze this ingredient: "${ingredient}"`,
            },
          ],
          response_format: {
            type: 'json_schema',
            json_schema: INGREDIENT_ANALYSIS_SCHEMA,
          },
        });

        const analysis = plainToClass(IngredientAnalysis, JSON.parse(result));
        await validateOrReject(analysis);

        this.logger.debug('Successfully analyzed ingredient', {
          ingredient,
          analysis,
        });

        return analysis;
      } catch (error) {
        this.logger.error(
          `Failed to analyze ingredient: ${ingredient}`,
          error instanceof Error ? error.stack : error,
        );
        throw this.handleLLMError(error);
      }
    }

    async findBestMatch(
      ingredient: string,
      candidates: Array<{ id: string; description: string }>,
    ): Promise<BestMatch & { foodId: string }> {
      this.logger.debug(`Finding best match for: ${ingredient}`, {
        candidateCount: candidates.length,
      });

      try {
        const result = await this.complete({
          messages: [
            {
                 role: 'system',
                 content: `You are a food matching expert specialized in matching recipe ingredients to standardized food items.
                 Your task is to find the most appropriate match from a provided list of food items.

                 CRITICAL RULES:
                 1. EXACT COPYING: You must copy the exact text of your chosen match from the provided list
                 2. DIRECT MATCHES FIRST: Always prioritize direct ingredient matches over products containing the ingredient
                 3. BASIC FORM PRIORITY: Prefer basic/pure forms of ingredients over mixed products
                 4. NO MODIFICATIONS: Never modify or rewrite the matching food description

                 Examples:
                 Input: "olive oil"
                 List:
                 - vegetable oil, olive
                 - salad dressing, italian, commercial, regular
                 - vegetable oil, canola
                 Correct response: {
                   "bestMatch": "vegetable oil, olive",
                   "requested_ingredient": "olive oil",
                   "confidence": "HIGH",
                   "reasoning": "Direct match for pure olive oil, which is the exact ingredient requested"
                 }
                 (NOT "salad dressing, italian" even though it contains olive oil)

                 Input: "diced tomatoes"
                 List:
                 - tomatoes, raw
                 - tomato sauce
                 - tomato soup, canned
                 Correct response: {
                   "bestMatch": "tomatoes, raw",
                   "requested_ingredient": "diced tomatoes",
                   "confidence": "HIGH",
                   "reasoning": "Basic form of the requested ingredient, preparation method difference can be noted but doesn't affect matching"
                 }
                 (NOT "tomato sauce" or "tomato soup" as they are processed products)`,
            },
            {
              role: 'user',
              content: `Find the best match for this ingredient from the following list.

              Ingredient to match: "${ingredient}"

              Available matches (copy the exact text for your choice):
              ${candidates.map(c => `- ${c.description}`).join('\n')}

              Remember:
              1. Choose basic/pure forms of ingredients over mixed products
              2. Copy the exact text of your chosen match
              3. Consider ingredient equivalence (e.g., "vegetable oil, olive" = "olive oil")
              4. Do not choose products that merely contain the ingredient

              Think step by step:
              1. First, look for direct matches or equivalent basic forms
              2. If no direct match, look for closest basic ingredient form
              3. Avoid choosing products where the ingredient is just a component
              4. Copy the exact text of your chosen match`,
            },
          ],
          response_format: {
            type: 'json_schema',
            json_schema: BEST_MATCH_SCHEMA,
          },
        });

        const match = plainToClass(BestMatch, JSON.parse(result));
        await validateOrReject(match);

        const matchedCandidate = candidates.find(
          c => c.description === match.bestMatch,
        );

        if (!matchedCandidate) {
          throw new Error(
            'LLM returned a match that is not in the candidate list',
          );
        }

        const finalResult = {
          ...match,
          foodId: matchedCandidate.id,
        };

        this.logger.debug('Successfully found best match', {
          ingredient,
          match: finalResult,
        });

        return finalResult;

      } catch (error) {
        this.logger.error(
          `Failed to find match for: ${ingredient}`,
          error instanceof Error ? error.stack : error,
        );
        throw this.handleLLMError(error);
      }
    }

    private async complete(request: CompletionRequest & {
      response_format?: {
        type: 'json_schema';
        json_schema: unknown;
      };
    }): Promise<string> {
      let retries = 0;

      while (retries < this.config.llmConfig.maxRetries) {
        try {
          const params = {
            temperature: 0.2,
            max_tokens: 500,
            model: this.config.llmConfig.model,
          }

          this.logger.debug('Sending LLM request', {
            attempt: retries + 1,
            messageCount: request.messages.length,
            hasJsonSchema: !!request.response_format,
            ...params
          });
          const response = await axios.post<CompletionResponse>(
            `${this.config.llmConfig.baseUrl}/v1/chat/completions`,
            {
              ...request,
              ...params
            },
            {
              headers: this.config.llmConfig.apiKey ? {
                'Authorization': `Bearer ${this.config.llmConfig.apiKey}`,
              } : undefined,
              timeout: this.config.llmConfig.timeout,
            },
          );

          return response.data.choices[0].message.content;
        } catch (error) {
          retries++;
          const isLastRetry = retries === this.config.llmConfig.maxRetries;

          this.logger.error(
            `LLM request failed (attempt ${retries}/${this.config.llmConfig.maxRetries})`,
            error instanceof AxiosError ? {
              status: error.response?.status,
              data: error.response?.data,
            } : error,
          );

          if (isLastRetry) {
            throw error;
          }

          await new Promise(resolve =>
            setTimeout(resolve, 1000 * retries)
          );
        }
      }

      throw new Error('Failed to complete LLM request');
    }

    private handleLLMError(error: unknown): Error {
      if (error instanceof SyntaxError) {
        return new Error('LLM returned invalid JSON response');
      }
      if (error instanceof AxiosError) {
        return new Error(`LLM request failed: ${error.message}`);
      }
      return error instanceof Error ? error : new Error('Unknown LLM error');
    }
}
