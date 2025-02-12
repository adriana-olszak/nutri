import { IStructuredRecipe } from '@nutri/server-recipe-import';

export interface RecipeAdapter<Output> {
  validateAndTransform(rawData: unknown): Promise<Output>;
  adapt(source: Output): IStructuredRecipe;
}
