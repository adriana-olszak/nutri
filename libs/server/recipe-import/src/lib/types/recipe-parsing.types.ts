import { RecipeInstructionsType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    Min,
    ValidateNested,
} from 'class-validator';
import { IStructuredRecipe } from '../interfaces/structured-recipe.interface';
import { IngredientParseResult, ParseInstructionResult } from '../parser';

export class ParsedRecipeIngredient
  implements
    Omit<
      IngredientParseResult,
      'alternativeQuantities' | 'minQuantity' | 'maxQuantity'
    >
{
  @IsNumber()
  @Min(0)
  quantity!: number;

  @IsOptional()
  @IsString()
  quantityText!: string;

  @IsString()
  unit!: string;

  @IsOptional()
  @IsString()
  unitText!: string;

  @IsString()
  ingredientText!: string;

  @IsOptional()
  @IsString()
  extraInfo!: string;

  @IsOptional()
  @IsString()
  partName?: string;
}

export class ParsedRecipeInstruction
  implements
    Omit<
      ParseInstructionResult,
      | 'alternativeTemperatures'
      | 'timeItems'
      | 'temperatureText'
      | 'temperatureUnitText'
    >
{
  @IsString()
  content!: string;

  @IsNumber()
  @Min(1)
  order!: number;

  @IsEnum(RecipeInstructionsType)
  type: RecipeInstructionsType = RecipeInstructionsType.TEXT;

  @IsNumber()
  listIndex?: number;

  @IsNumber()
  totalTimeInSeconds!: number;

  @IsNumber()
  temperature!: number;

  @IsString()
  temperatureUnit!: string;
}

export class ParsedRecipe
  implements
    Omit<IStructuredRecipe, 'sourceId' | 'ingredients' | 'instructions'>
{
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  sourceId?: string;

  @IsOptional()
  @IsString()
  sourceUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  cookingTime?: string;

  @IsOptional()
  @IsString()
  prepTime?: string;

  @IsOptional()
  @IsString()
  servingsText?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  servingsMin?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  servingsMax?: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ParsedRecipeIngredient)
  ingredients!: ParsedRecipeIngredient[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ParsedRecipeInstruction)
  instructions!: ParsedRecipeInstruction[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  seasons?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  language?: string = 'en';
}

export const RECIPE_SCHEMA = {
  name: 'recipe_parsing',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      sourceId: { type: 'string' },
      sourceUrl: { type: 'string' },
      description: { type: 'string' },
      cookingTime: { type: 'string' },
      prepTime: { type: 'string' },
      servingsText: { type: 'string' },
      servingsMin: { type: 'number' },
      servingsMax: { type: 'number' },
      ingredients: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            quantity: { type: 'number' },
            quantityText: { type: 'string' },
            unit: { type: 'string' },
            unitText: { type: 'string' },
            ingredientText: { type: 'string' },
            extraInfo: { type: 'string' },
            partName: { type: 'string' },
          },
          required: ['quantity', 'unit', 'ingredientText'],
        },
      },
      instructions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            content: { type: 'string' },
            order: { type: 'number' },
            type: { type: 'string', enum: ['TEXT', 'IMAGE', 'PART'] },
            listIndex: { type: 'number' },
            totalTimeInSeconds: { type: 'number' },
            temperature: { type: 'number' },
            temperatureUnit: { type: 'string' },
          },
          required: ['content', 'order', 'type'],
        },
      },
      categories: {
        type: 'array',
        items: { type: 'string' },
      },
      seasons: {
        type: 'array',
        items: { type: 'string' },
      },
      tags: {
        type: 'array',
        items: { type: 'string' },
      },
      language: { type: 'string', default: 'en' },
    },
    required: ['title', 'ingredients', 'instructions'],
  },
};

// Types for parsing configuration and results
export type ParsingStrategy = 'BASIC' | 'ADVANCED' | 'ML';

export type ConfidenceScore = {
  overall: number;
  ingredients: number;
  instructions: number;
};
