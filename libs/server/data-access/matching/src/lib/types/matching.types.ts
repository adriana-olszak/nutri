import { MatchQuality, MatchStatus, MatchType, Prisma, ReviewStatus } from '@prisma/client';

export interface CreateMatchDto {
  ingredientText: string;
  status?: MatchStatus;
  recipeIngredientId: string;
}
export interface AlgorithmData {
  score?: number;
  confidence?: number;
  llmReasoning?: string;
  metadata?: Record<string, string>;
  originalScore?:string;
}

export interface CreateMatchFoodDto {
  matchId: string;
  foodId: string;
  rank?: number;
  confidence?: number;
  matchQuality?: MatchQuality;
  matchType?: MatchType;
  algorithmVersion?: string;
  // Change this to use Prisma.JsonValue
  algorithmData?: Prisma.JsonValue & AlgorithmData;
}

export interface CreateManualReviewDto {
  matchId: string;
  reviewStatus: ReviewStatus;
  reviewerId?: string;
  notes?: string;
}

export interface MatchWithRelations {
  id: string;
  status: MatchStatus;
  ingredientText: string;
  selectedFoodMatch: {
    id: string;
    food: {
      id: string;
      description: string;
    };
  } | null;
  foodMatches: Array<{
    id: string;
    rank: number | null;
    confidence: number | null;
    matchQuality: MatchQuality | null;
    food: {
      id: string;
      description: string;
    };
  }>;
}

export interface Match  {
  id: string;
  status: MatchStatus;
  ingredientText: string;
  selectedFoodMatchId: string | null,
  createdAt: Date;
  updatedAt: Date;
}
