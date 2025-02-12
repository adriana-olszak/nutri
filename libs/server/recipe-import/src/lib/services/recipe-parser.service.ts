import { Injectable, Logger } from '@nestjs/common';
import { LLMService } from '@nutri/server-ml';
import { IStructuredRecipe } from '../interfaces/structured-recipe.interface';
import { IUnstructuredRecipe } from '../interfaces/unstructured-recipe.interface';
import { ParsedRecipe, RECIPE_SCHEMA } from '../types/recipe-parsing.types';

@Injectable()
export class RecipeParserService {
  private readonly logger = new Logger(RecipeParserService.name);

  constructor(private readonly llmService: LLMService) {}

  async parseRecipe(
    input: IStructuredRecipe | IUnstructuredRecipe,
  ): Promise<ParsedRecipe> {
    try {
      return await this.parseLLM(input);
    } catch (error) {
      this.logger.error('Failed to parse recipe', {
        error,
        title: 'title' in input ? input.title : 'Unknown',
      });
      throw error;
    }
  }

  private async parseLLM(
    input: IStructuredRecipe | IUnstructuredRecipe,
  ): Promise<ParsedRecipe> {
    const prompt = this.buildPrompt(input);

    return await this.llmService.completeWithValidation({
      messages: [
        {
          role: 'system',
          content: `You are a recipe parsing expert. Parse the following recipe into a standardized format.

            Focus on:
            1. Accurate ingredient parsing (quantities, units, preparations)
            2. Clear, ordered instruction steps
            3. Extracting all available metadata
            4. Maintaining original language and terminology

            If the recipe is structured, validate and enhance the existing structure.
            If unstructured, extract all components while preserving meaning.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      context: 'parse-recipe',
      responseClass: ParsedRecipe,
      responseSchema: RECIPE_SCHEMA,
    });
  }

  private buildPrompt(input: IStructuredRecipe | IUnstructuredRecipe): string {
    if ('text' in input) {
      return `Parse this recipe text into structured format:
          Title: ${input.title || 'Untitled'}
          Text:
          ${input.text}`;
    }

    return `Parse this structured recipe:
    ${JSON.stringify(input, null, 2)}`;
  }
}
