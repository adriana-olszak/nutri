
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum LLMConfidence {
  EXACT = 'EXACT',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export class IngredientAnalysis {
  @IsString()
  @IsNotEmpty()
  mainComponent!: string;

  @IsString()
  preparation!: string | null;

  @IsString()
  state!: string | null;

  @IsArray()
  @IsString({ each: true })
  qualifiers!: string[];

  @IsString()
  @IsNotEmpty()
  normalized!: string;
}

export class BestMatch {
  @IsString()
  @IsNotEmpty()
  bestMatch!: string;

  @IsEnum(LLMConfidence)
  confidence!: LLMConfidence;

  @IsString()
  @IsNotEmpty()
  reasoning!: string;
}

export type LLMMatchResult = BestMatch & {
  foodId: string;
}

export class LLMError extends Error {
  constructor(
    public code: LLMErrorCode,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = 'LLMError';
  }
}

export enum LLMErrorCode {
  INVALID_RESPONSE = 'INVALID_RESPONSE',
  COMPLETION_FAILED = 'COMPLETION_FAILED',
  PARSING_FAILED = 'PARSING_FAILED',
  VALIDATION_FAILED = 'VALIDATION_FAILED',
  TIMEOUT = 'TIMEOUT',
  RATE_LIMIT = 'RATE_LIMIT',
}
export const INGREDIENT_ANALYSIS_SCHEMA = {
  name: 'ingredient_analysis',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      mainComponent: {
        type: 'string',
        description: 'The core ingredient',
      },
      preparation: {
        type: ['string', 'null'],
        description: 'How the ingredient is prepared, or null if not specified',
      },
      state: {
        type: ['string', 'null'],
        description: 'Physical state or form of the ingredient, or null if not specified',
      },
      qualifiers: {
        type: 'array',
        items: { type: 'string' },
        description: 'Relevant modifiers or qualifiers for the ingredient',
      },
      normalized: {
        type: 'string',
        description: 'Standardized description of the ingredient',
      },
    },
    required: ['mainComponent', 'qualifiers', 'normalized'],
  },
};

export const BEST_MATCH_SCHEMA = {
  name: 'best_match',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      bestMatch: {
        type: 'string',
        description: 'The exact description from the provided list of potential matches that best matches the ingredient',
      },
      requested_ingredient: {
        type: 'string',
        description: `The requested Ingredient that was to be found`
      },
      confidence: {
        type: 'string',
        enum: ['EXACT','HIGH', 'MEDIUM', 'LOW'],
        description: 'Confidence level in the match',
      },
      reasoning: {
        type: 'string',
        description: 'Explanation for why this match was chosen',
      },
    },
    required: ['requested_ingredient','bestMatch', 'confidence', 'reasoning'],
  },
};
