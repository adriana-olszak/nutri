
import {
    MatchFood,
    MatchQuality,
    MatchStatus
} from '@prisma/client';

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

export interface MatchQualityEvaluation {
  quality: MatchQuality;
  confidence: number;
}
