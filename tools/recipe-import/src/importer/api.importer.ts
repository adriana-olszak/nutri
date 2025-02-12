import { IStructuredRecipe } from '@nutri/server-recipe-import';
import axios from 'axios';
import { log } from 'node:console';
import { ImportConfig, ImportResult } from '../types/common';
import { RecipeImporter } from './importer.interface';

export class APIRecipeImporter implements RecipeImporter {
  constructor(private readonly config: ImportConfig) {}

  async import(recipe: Partial<IStructuredRecipe>): Promise<ImportResult> {
    try {
      log('APIRecipeImporter', JSON.stringify(recipe));
      const response = await axios.post(
        `${this.config.apiUrl}/api/recipes/import`,
        {
          data: recipe,
          options: {
            autoMatchIngredients: true,
          },
        },
      );

      return {
        success: true,
        recipeId: response.data.id,
      };
    } catch (error) {
      console.error(error.response.data);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}
