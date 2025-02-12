export interface IStructuredRecipe {
  // required
  title: string;
  sourceId: string; // unique identifier for the recipe
  ingredients: string[];
  instructions: string[];
  // optional
  sourceUrl?: string;
  description?: string;
  cookingTime?: string;
  prepTime?: string;
  servingsText?: string;
  servingsMin?: number;
  servingsMax?: number;
  categories?: string[];
  seasons?: string[];
  tags?: string[];
  language?: string;
}
