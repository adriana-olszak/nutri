export interface ImportConfig {
  apiUrl: string;
  batchSize?: number;
}

export interface ImportResult {
  success: boolean;
  recipeId?: string;
  error?: string;
}
