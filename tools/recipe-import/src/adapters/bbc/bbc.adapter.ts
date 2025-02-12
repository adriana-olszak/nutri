import { IStructuredRecipe } from '@nutri/server-recipe-import';

import { RecipeAdapter } from '../adapter.interface';

import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { Logger } from '../../utils';
import { BBCRecipe } from './bbc-types';

export class BBCAdapter implements RecipeAdapter<BBCRecipe> {
  private readonly logger = new Logger('BBCAdapter');

  async validateAndTransform(source: unknown): Promise<BBCRecipe> {
    try {
      const transformed = plainToClass(BBCRecipe, source);
      await validateOrReject(transformed);
      return transformed;
    } catch (errors) {
      if (Array.isArray(errors)) {
        const errorMessages = errors.map((err) =>
          Object.values(err.constraints || {}).join(', '),
        );

        this.logger.error(`Validation failed for recipe:`, {
          name: (source as any)?.Name,
          url: (source as any)?.url,
          errors: errorMessages,
        });

        throw new Error(`Validation failed: ${errorMessages.join('; ')}`);
      }
      throw errors;
    }
  }

  adapt(source: BBCRecipe): IStructuredRecipe {
    return {
      // required
      title: source.Name,
      sourceId: source.url,
      ingredients: source.Ingredients,
      instructions: source.Method,
      // optional
      sourceUrl: source.url,
      description: source.Description,
      language: 'en',
    };
  }
}
