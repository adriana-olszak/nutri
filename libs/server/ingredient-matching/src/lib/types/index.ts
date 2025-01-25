
import {
    Match,
    MatchFood,
    MatchQuality,
    MatchStatus,
    Prisma
} from '@prisma/client';

/**
 * Repository DTOs
 */
export interface CreateMatchFoodDto {
  matchId: string;
  foodId: string;
  rank?: number;
  confidence?: number;
  matchQuality?: MatchQuality;
  matchType?: 'AUTOMATIC' | 'MANUAL';
  algorithmVersion?: string;
  algorithmData?: Prisma.JsonValue;
}

export interface UpdateMatchStatusDto {
  id: string;
  status: MatchStatus;
}

/**
 * Service interfaces
 */
export interface ProcessMatchOptions {
  similarityThreshold?: number;
  maxCandidates?: number;
  modelVersion?: string;
}

export interface ProcessMatchResult {
  matchId: string;
  status: MatchStatus;
  selectedFoodMatch?: MatchFood;
  error?: Error;
}

/**
 * Repository interfaces
 */
export interface IMatchRepository {
  getMatchById(id: string): Promise<Match & {
    foodMatches: MatchFood[];
    recipeIngredients: {
      id: string;
      ingredientText: string;
    }[];
  }>;

  createFoodMatches(matches: CreateMatchFoodDto[]): Promise<MatchFood[]>;

  updateMatchStatus(data: UpdateMatchStatusDto): Promise<Match>;

  updateSelectedFoodMatch(
    matchId: string,
    foodMatchId: string
  ): Promise<Match>;

  updateRecipeIngredientsFoodId(
    matchId: string,
    foodId: string
  ): Promise<void>;
}

/**
 * Service Result Types
 */
export interface MatchEvaluationResult {
  status: MatchStatus;
  selectedFoodMatch?: MatchFood;
  needsReview: boolean;
}

/**
 * Error Types
 */
export class IngredientMatchingError extends Error {
  constructor(
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'IngredientMatchingError';
  }
}

export enum ErrorCodes {
  MATCH_NOT_FOUND = 'MATCH_NOT_FOUND',
  PROCESSING_FAILED = 'PROCESSING_FAILED',
  INVALID_STATUS = 'INVALID_STATUS',
  DATABASE_ERROR = 'DATABASE_ERROR',
  FOOD_NOT_FOUND = 'FOOD_NOT_FOUND',
  CROSS_ENCODING_FAILED = 'CROSS_ENCODING_FAILED',
  NO_VALID_MATCHES = 'NO_VALID_MATCHES',
  NO_CANDIDATES = 'NO_CANDIDATES',
}

/**
 * Match Quality Evaluation Types
 */
export interface MatchQualityThresholds {
  exact: number;
  high: number;
  medium: number;
  low: number;
}

export interface MatchQualityEvaluation {
  quality: MatchQuality;
  confidence: number;
}

export interface FoodCandidate {
  id: string;
  description: string;
  embedding: number[];
}

export interface RankedMatch {
  foodId: string;
  score: number;
}

export interface IFoodRepository {
  getFoodCandidatesWithEmbeddings(): Promise<FoodCandidate[]>;
  getFoodDescriptionById(id: string): Promise<string>;
}
