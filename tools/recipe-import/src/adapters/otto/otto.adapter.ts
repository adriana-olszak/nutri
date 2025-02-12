import { IStructuredRecipe } from '@nutri/server-recipe-import';

import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { Logger } from '../../utils';
import { RecipeAdapter } from '../adapter.interface';
import { OttoRecipe } from './parsed.type';
import { parseRecipe } from './parser/parser';
import { RecipeData } from './types';

export class OttoAdapter implements RecipeAdapter<OttoRecipe> {
  private readonly logger = new Logger('OttoAdapter');

  async validateAndTransform(source: RecipeData): Promise<OttoRecipe> {
    try {
      const parsedRecipe = parseRecipe(source);
      const transformedRecipe = plainToClass(OttoRecipe, parsedRecipe);
      await validateOrReject(transformedRecipe);
      return transformedRecipe;
    } catch (errors) {
      if (Array.isArray(errors)) {
        const errorMessages = errors.map((err) =>
          Object.values(err.constraints || {}).join(', '),
        );

        this.logger.error(`Validation failed for recipe:`, {
          title: (source as any)?.title?.value,
          id: (source as any)?.id,
          errors: errorMessages,
        });

        throw new Error(`Validation failed: ${errorMessages.join('; ')}`);
      }
      throw errors;
    }
  }

  adapt(source: OttoRecipe): IStructuredRecipe {
    return {
      // required
      title: source.title,
      sourceId: source.sourceId,
      ingredients: source.ingredients,
      instructions: source.instructions,
      //optional
      sourceUrl: source.sourceUrl,
      description: source.description,
      cookingTime: source.cookingTime,
      prepTime: source.prepTime,
      servingsText: source.servingsText,
      categories: source.categories,
      seasons: source.seasons,
      tags: source.tags,
      language: 'en',
    };
  }
}
