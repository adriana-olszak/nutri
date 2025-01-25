import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from '@nutri/server-config';
import { HappyFaceModel } from "../models/happy-face.model";
import { MLError, MatchErrorType, ModelConfig } from "../types";

import { Prisma } from '@prisma/client';

@Injectable()
export class MLService {
  logger = new Logger(MLService.name);

  private model: HappyFaceModel | null = null;

  constructor(
    private readonly configService: ConfigService,
  ) {
  }

  get version(): string {
    const config = this.configService.modelConfig
    return config.version ?? '1.0.0';
  }

  get metadata(): Prisma.JsonValue {
    return {
      modelName: 'happy-face',
      modelType: 'bi-encoder',
      description: 'Ingredient matching model using bi-encoder architecture',
      timestamp: new Date().toISOString(),
    };
  }
  private async ensureModel(): Promise<HappyFaceModel> {
    if (!this.model) {
      const config = this.configService.modelConfig
      this.model = new HappyFaceModel(config);
      await this.model.initialize();
    }
    return this.model;
  }

  async generateEmbeddings(text: string): Promise<number[]> {
    try {
      const model = await this.ensureModel();
      return await model.generateEmbeddings(text);
    } catch (error) {
      this.logger.error('Failed to generate embeddings', error);
      throw new MLError(
        MatchErrorType.INFERENCE_ERROR,
        'Failed to generate embeddings',
        error,
      );
    }
  }

  async calculateSimilarity(
    embedding1: number[],
    embedding2: number[],
  ): Promise<number> {
    try {
      const model = await this.ensureModel();
      return await model.calculateSimilarity(embedding1, embedding2);
    } catch (error) {
      this.logger.error('Failed to calculate similarity', error);
      throw new MLError(
        MatchErrorType.INFERENCE_ERROR,
        'Failed to calculate similarity',
        error,
      );
    }
  }

  async crossEncode(text1: string, text2: string): Promise<number> {
    try {
      const model = await this.ensureModel();
      return await model.crossEncode(text1, text2);
    } catch (error) {
      this.logger.error('Failed to perform cross encoding', error);
      throw new MLError(
        MatchErrorType.INFERENCE_ERROR,
        'Failed to perform cross encoding',
        error,
      );
    }
  }

  async dispose(): Promise<void> {
    if (this.model) {
      try {
        await this.model.dispose();
        this.model = null;
      } catch (error) {
        this.logger.error('Failed to dispose model', error);
        throw new MLError(
          MatchErrorType.MODEL_LOADING_ERROR,
          'Failed to dispose model',
          error,
        );
      }
    }
  }

  // Optional: Method to explicitly initialize the model
  async initialize(config?: ModelConfig): Promise<void> {
    if (this.model) {
      await this.dispose();
    }
    const modelConfig = config ?? this.configService.modelConfig
    this.model = new HappyFaceModel(modelConfig);
    await this.model.initialize();
  }
}
