export interface IngredientMatchJobDto {
  matchId: string;
  modelVersion?: string;
  similarityThreshold?: number;
  maxCandidates?: number;
}
