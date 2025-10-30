import { RecipeInstructionsType } from '@prisma/client';

export interface CreateRecipeDto {
  title: string;
  sourceId?: string;
  sourceUrl?: string;
  description?: string;
  cookingTime?: string;
  prepTime?: string;
  servingsText?: string;
  servingsMin?: number;
  servingsMax?: number;
  tagIds?: string[];
}

export interface CreateRecipeIngredientDto {
  recipeId: string;
  partId?: string;
  foodId?: string;
  id?: string;
  quantity: number;
  quantityText?: string | null;
  minQuantity?: number | null;
  maxQuantity?: number | null;
  unit: string;
  unitText?: string | null;
  ingredientText: string;
  extraInfo?: string | null;
}

export interface CreateRecipeInstructionDto {
  recipeId: string;
  content: string;
  type: RecipeInstructionsType;
  order: number;
  listIndex?: number;
}

export interface RecipeWithRelations {
  id: string;
  title: string;
  description?: string | null;
  servingsText?: string | null;
  servingsMin?: number | null;
  servingsMax?: number | null;
  cookingTime?: string | null;
  prepTime?: string | null;
  instructions: Array<{
    id: string;
    content: string;
    type: RecipeInstructionsType;
    order: number;
  }>;
  ingredients: Array<{
    id: string;
    ingredientText: string;
    quantity: number;
    unit: string;
    food: {
      id: string;
      description: string;
    } | null;
  }>;
  tags: Array<{
    id: string;
    name: string;
  }>;
}

export interface EntityHandler {
  model: {
    create: (data: { data: { name: string } }) => Promise<{ id: string }>;
    findUnique: (data: {
      where: { name: string };
    }) => Promise<{ id: string } | null>;
  };
  connectionField: string;
}

export type EntityType = 'tag';
