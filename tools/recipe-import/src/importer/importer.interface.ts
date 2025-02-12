import { IStructuredRecipe } from '@nutri/server-recipe-import';
import { ImportResult } from '../types/common';

export interface RecipeImporter {
  import(recipe: Partial<IStructuredRecipe>): Promise<ImportResult>;
}
