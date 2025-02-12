import { IngredientParseResult } from "../parser/types";

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

export type ParsedIngredient =
  | ParsedIngredientPart
  | ParsedIngredientIngredient;

export interface ParsedIngredientPart {
  type: 'part';
  name: string;
}

export interface ParsedIngredientIngredient extends IngredientParseResult {
  type: 'ingredient';
}
