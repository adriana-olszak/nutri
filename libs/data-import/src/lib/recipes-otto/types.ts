import { Prisma } from '@prisma/client';
import { IngredientParseResult } from '../../../../server/parse-recipe/src/index';

export interface RecipeData {
  id: string;
  title: { value: string };
  onlineStoreUrl: string;
  fields: { key: string; value: string }[];
  all_steps: string;
  images?: { references: { nodes: ImageData[] } };
  collection: { value: string };
  meal: { value: string };
}

interface ImageData {
  image: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
}

export interface ServingData {
  servingsText: string;
  servingsMin: number | null;
  servingsMax: number | null;
}


export type EntityType = 'recipeCategory' | 'season' | 'tag';
type EntityModel =
  | Prisma.RecipeCategoryDelegate
  | Prisma.SeasonDelegate
  | Prisma.TagDelegate

export interface EntityHandler {
  model: EntityModel;
  connectionField: string;
}


export interface ParsedRecipe {
  sourceId: string;
  title: string;
  sourceUrl: string;
  description?: string;
  cookingTime?: string;
  prepTime?: string;
  servingsText: string;
  servingsMin: number | null;
  servingsMax: number | null;
  instructions: ParsedStep[];
  images: ParsedImage[];
  categories: string[];
  seasons: string[];
  tags: string[];
  ingredients: ParsedIngredient[];
}
export interface ParsedStep {
  type: 'step';
  content: string;
  stepNumber?: number;
  listIndex: number;
}
export interface ParsedImage {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export type ParsedIngredient = ParsedIngredientPart | ParsedIngredientIngredient;

export interface ParsedIngredientPart {
  type: 'part';
  name: string;
}

export interface ParsedIngredientIngredient extends IngredientParseResult{
  type: 'ingredient';
}
