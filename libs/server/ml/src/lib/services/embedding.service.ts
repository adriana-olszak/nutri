import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nutri/server-config';

import { EMBEDDING_MODELS } from '../config/embedding.config';
import { SentenceTransformerEmbedding } from '../models/sentence-transformer';

@Injectable()
export class EmbeddingService {
  logger = new Logger(EmbeddingService.name);
  private models: Map<string, SentenceTransformerEmbedding> = new Map();

  constructor(
    private readonly configService: ConfigService,
  ) {
  }

  async getModel(modelName: string): Promise<SentenceTransformerEmbedding> {
    if (!this.models.has(modelName)) {
      const model = new SentenceTransformerEmbedding(modelName);
      await model.initialize();
      this.models.set(modelName, model);
    }
    const model = this.models.get(modelName);
    if (!model) {
      throw new Error(`Model ${modelName} not found`);
    }
    return model;
  }

  async generateEmbedding(
    text: string,
    modelName: string = EMBEDDING_MODELS.MINI_LM_L6.name,
  ): Promise<number[]> {
    try {
      const model = await this.getModel(modelName);
      return await model.encode(text);
    } catch (error) {
      this.logger.error(`Failed to generate embedding for text: ${text}`, error);
      throw error;
    }
  }
}
