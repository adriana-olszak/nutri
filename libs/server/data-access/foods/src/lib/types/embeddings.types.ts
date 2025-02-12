
export type EmbeddingType = 'sentenceTransformer'
export type LanguageCode = 'en' | 'fr' | 'de' | 'es' | 'pl'

export interface EmbeddingSearchOptions {
  languageCode: LanguageCode;
  embeddingType: EmbeddingType;
  similarityThreshold?: number;
  limit?: number;
  modelVersion?: string;
}

export interface CreateEmbeddingDto {
  foodId: string;
  embedding: number[];
  languageCode: LanguageCode;
  embeddingType: EmbeddingType;
  modelVersion: string;
}

export interface EmbeddingWithMetadata {
  id: string;
  foodId: string;
  embedding: number[];
  languageCode: LanguageCode;
  embeddingType: EmbeddingType;
  modelVersion: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SimilarFood {
  id: string;
  description: string;
  similarity: number;
  categoryId: string;
  categoryName: string;
}
