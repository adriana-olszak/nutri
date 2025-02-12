import { Injectable, Logger } from "@nestjs/common";
import { BaseRepository, Prisma, TransactionService } from "@nutri/server-db-client";
import { ErrorHandlerFacade } from "@nutri/server-shared";
import { CreateEmbeddingDto, EmbeddingSearchOptions, EmbeddingType, EmbeddingWithMetadata, LanguageCode, SimilarFood } from "../types/embeddings.types";

@Injectable()
export class FoodEmbeddingRepository  extends BaseRepository {
  entityName = 'FoodEmbedding'
  logger = new Logger(FoodEmbeddingRepository.name);
  errorHandler = new ErrorHandlerFacade(this.logger)

  constructor(txService: TransactionService) {
    super(txService);
  }
  async create(dto: CreateEmbeddingDto): Promise<EmbeddingWithMetadata> {
    try {
      return await this.client.$queryRaw`
        INSERT INTO food_embeddings (
          food_id,
          embedding,
          language_code,
          embedding_type,
          model_version
        )
        VALUES (
          ${dto.foodId}::uuid,
          ${dto.embedding}::vector,
          ${dto.languageCode},
          ${dto.embeddingType},
          ${dto.modelVersion}
        )
        RETURNING *
      `;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'create',
        data: dto,
      })
    }
  }

  async findSimilarFoods(
    embedding: number[],
    options: EmbeddingSearchOptions,
  ): Promise<SimilarFood[]> {
    this.logger.debug('Finding similar foods', { embedding, options });

    try {
      return await this.client.$queryRaw`
        SELECT
          f.id,
          f.description,
          fc.id as "categoryId",
          fc.description as "categoryName",
          1 - (fe.embedding <=> ${embedding}::vector) as similarity
        FROM food_embeddings fe
        INNER JOIN foods f ON f.id = fe.food_id
        INNER JOIN food_categories fc ON f.category_id = fc.id
        WHERE fe.embedding_type = ${options.embeddingType}
          AND fe.language_code = ${options.languageCode}
          AND (${options.modelVersion}::text IS NULL OR fe.model_version = ${options.modelVersion})
          AND 1 - (fe.embedding <=> ${embedding}::vector) > ${options.similarityThreshold ?? 0.6}
        ORDER BY similarity DESC
        LIMIT ${options.limit ?? 100}
      `;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findSimilarFoods',
      })}
  }

  async updateEmbedding(
    foodId: string,
    dto: Partial<CreateEmbeddingDto>,
  ): Promise<EmbeddingWithMetadata> {
    try {
      const updates = [];
      if (dto.embedding) updates.push(`embedding = ${dto.embedding}::vector`);
      if (dto.modelVersion) updates.push(`model_version = ${dto.modelVersion}`);

      return await this.client.$queryRaw`
        UPDATE food_embeddings
        SET ${Prisma.raw(updates.join(', '))},
            updated_at = CURRENT_TIMESTAMP
        WHERE food_id = ${foodId}::uuid
          AND language_code = ${dto.languageCode}
          AND embedding_type = ${dto.embeddingType}
        RETURNING *
      `;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'updateEmbedding',
        entityId: foodId,
        data: dto,
      })
    }
  }

  async delete(
    foodId: string,
    languageCode: LanguageCode,
    embeddingType: EmbeddingType,
  ): Promise<void> {
    try {
      await this.client.$queryRaw`
        DELETE FROM food_embeddings
        WHERE food_id = ${foodId}::uuid
          AND language_code = ${languageCode}
          AND embedding_type = ${embeddingType}
      `;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'delete',
        entityId: foodId,
        data: {
          languageCode,
          embeddingType,
        },
      })
    }
  }

  async findByFoodId(
    foodId: string,
    languageCode: LanguageCode,
    embeddingType: EmbeddingType,
  ): Promise<EmbeddingWithMetadata | null> {
    try {
      const result = await this.client.$queryRaw<EmbeddingWithMetadata[]>`
        SELECT *
        FROM food_embeddings
        WHERE food_id = ${foodId}::uuid
          AND language_code = ${languageCode}
          AND embedding_type = ${embeddingType}
      `;
      return result[0] || null;
    } catch (error) {
      return this.errorHandler.handleDatabaseError(error, this.entityName, {
        operation: 'findByFoodId',
        entityId: foodId,
        data: {
          languageCode,
          embeddingType,
        },
      })
    }
  }
}
