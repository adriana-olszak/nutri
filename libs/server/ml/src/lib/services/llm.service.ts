import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';
import { StatsDService } from '@nutri/server-metrics';
import axios, { AxiosError } from 'axios';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BEST_MATCH_SCHEMA, BestMatch } from '../types/llm.types';

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
  ) {}
  // TODO move out of LLM service
  async findBestMatch(
    ingredient: string,
    candidates: Array<{ id: string; description: string }>,
  ): Promise<BestMatch & { foodId: string }> {
    const match = await this.completeWithValidation({
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
              ${candidates.map((c) => `- ${c.description}`).join('\n')}

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
      responseSchema: BEST_MATCH_SCHEMA,
      responseClass: BestMatch,
      context: 'find-best-match',
    });

    const matchedCandidate = candidates.find(
      (c) => c.description === match.bestMatch,
    );

    if (!matchedCandidate) {
      throw new Error('LLM returned a match that is not in the candidate list');
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
  }

  public async completeWithValidation<T extends object>(params: {
    messages: CompletionRequest['messages'];
    responseSchema: { schema: Record<string, unknown> };
    responseClass: new () => T;
    context: string;
  }): Promise<T> {
    this.logger.log(`Starting ${params.context}`);
    console.log('params', params);
    try {
      const result = await this.complete({
        messages: params.messages,
        response_format: {
          type: 'json_schema',
          json_schema: params.responseSchema,
        },
      });

      const parsed = plainToClass(params.responseClass, JSON.parse(result));
      await validateOrReject(parsed);

      this.logger.log(`Successfully completed ${params.context}`, {
        result: parsed,
      });

      return parsed;
    } catch (e) {
      const error = this.handleLLMError(e);
      this.logger.error(
        error,
        `Failed to complete ${params.context}`,
        error instanceof Error ? error.stack : error,
      );
      throw error;
    }
  }

  private async complete(
    request: CompletionRequest & {
      response_format?: {
        type: 'json_schema';
        json_schema: { schema: Record<string, unknown> };
      };
    },
  ): Promise<string> {
    let retries = 0;

    while (retries < this.config.llmConfig.maxRetries) {
      try {
        const params = {
          temperature: request.temperature || 0.2,
          max_tokens: request.max_tokens || 8000,
          model: this.config.llmConfig.model,
        };

        this.logger.log({
          message: 'Sending LLM request',
          attempt: retries + 1,
          messageCount: request.messages.length,
          hasJsonSchema: !!request.response_format,
          ...params,
        });

        console.log('right be fore send', {
          ...params,
          ...request,
        });
        const response = await axios.post<CompletionResponse>(
          `${this.config.llmConfig.baseUrl}/v1/chat/completions`,
          {
            ...params,
            ...request,
          },
          {
            headers: this.config.llmConfig.apiKey
              ? {
                  Authorization: `Bearer ${this.config.llmConfig.apiKey}`,
                }
              : undefined,
            timeout: this.config.llmConfig.timeout,
          },
        );

        return response.data.choices[0].message.content;
      } catch (error) {
        retries++;
        const isLastRetry = retries === this.config.llmConfig.maxRetries;

        this.logger.error(
          error instanceof AxiosError
            ? {
                status: error.response?.status,
                data: error.response?.data,
                message: `LLM request failed (attempt ${retries}/${this.config.llmConfig.maxRetries})`,
              }
            : error,
        );

        if (isLastRetry) {
          throw error;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000 * retries));
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
