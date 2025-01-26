
export const EMBEDDING_MODELS = {
  MINI_LM_L6: {
    dbname: 'all-MiniLM-L6-v2',
    name: 'Xenova/all-MiniLM-L6-v2',
    dimensions: 384,
    similarityThreshold: 0.6,
  },
  MPNET: {
    dbname: 'all-mpnet-base-v2',
    name: 'all-mpnet-base-v2',
    dimensions: 768,
    similarityThreshold: 0.6,
  },
} as const;

export type EmbeddingModelType = keyof typeof EMBEDDING_MODELS;
