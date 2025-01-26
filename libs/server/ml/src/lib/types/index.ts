/**
 * Result from a single match/food item
 */
export interface MatchCandidate {
  foodId: string;
  score: number;
}

/**
 * Complete result from the matching process
 */
export interface MatchResult {
  matches: MatchCandidate[];
  crossEncoderScores?: number[];
  modelVersion?: string;
  metadata?: {
    processingTimeMs?: number;
    confidenceScores?: {
      biEncoder?: number;
      crossEncoder?: number;
    };
    [key: string]: unknown;
  };
}

/**
 * Options for the matching process
 */
export interface MatchOptions {
  similarityThreshold?: number;  // Minimum similarity score to consider a match
  maxCandidates?: number;       // Maximum number of candidates to return
  modelVersion?: string;        // Specific model version to use
  language?: string;            // Language code for matching (e.g., 'en', 'fr')
}

/**
 * Error types that can occur during matching
 */
export enum MatchErrorType {
  MODEL_LOADING_ERROR = 'MODEL_LOADING_ERROR',
  INFERENCE_ERROR = 'INFERENCE_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  NO_MATCHES_FOUND = 'NO_MATCHES_FOUND',
}

/**
 * Custom error class for ML-related errors
 */
export class MLError extends Error {
  constructor(
    public type: MatchErrorType,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'MLError';
  }
}

/**
 * Configuration for the ML models
 */
export interface ModelConfig {
  modelPath?: string;
  deviceType?: 'cpu' | 'gpu';
  batchSize?: number;
  threshold?: {
    biEncoder?: number;
    crossEncoder?: number;
  };
  maxSequenceLength?: number;
  [key: string]: unknown;
}

/**
 * Interface for model implementations
 */
export interface IIngredientMatchModel {
  initialize(config?: ModelConfig): Promise<void>;
  matchIngredient(text: string, options?: MatchOptions): Promise<MatchResult>;
  dispose(): Promise<void>;
}

export interface EmbeddingModelConfig {
  name: string;
  dimensions: number;
  similarityThreshold: number;
}

export interface EmbeddingSearchOptions {
  languageCode: string;
  embeddingType: string;
  modelName: string;
  similarityThreshold?: number;
  limit?: number;
}
