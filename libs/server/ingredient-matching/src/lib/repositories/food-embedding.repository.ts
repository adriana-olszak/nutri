import { Injectable, Logger } from "@nestjs/common";
import { Prisma, PrismaService } from "@nutri/server-db-client";
import { ErrorCodes, IngredientMatchingError } from "../types";
import { CreateEmbeddingDto, EmbeddingSearchOptions, EmbeddingType, EmbeddingWithMetadata, LanguageCode, SimilarFood } from "../types/embeddings.types";

@Injectable()
export class FoodEmbeddingRepository {
  logger = new Logger(FoodEmbeddingRepository.name);
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async create(dto: CreateEmbeddingDto): Promise<EmbeddingWithMetadata> {
    try {
      return await this.prisma.$queryRaw`
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
      this.logger.error('Failed to create food embedding', error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to create food embedding',
        error,
      );
    }
  }

  async findSimilarFoods(
    embedding: number[],
    options: EmbeddingSearchOptions,
  ): Promise<SimilarFood[]> {
    this.logger.debug('Finding similar foods', { embedding, options });

    try {
      return await this.prisma.$queryRaw`
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
      this.logger.error('Failed to find similar foods', error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to find similar foods',
        error,
      );
    }
  }

  async updateEmbedding(
    foodId: string,
    dto: Partial<CreateEmbeddingDto>,
  ): Promise<EmbeddingWithMetadata> {
    try {
      const updates = [];
      if (dto.embedding) updates.push(`embedding = ${dto.embedding}::vector`);
      if (dto.modelVersion) updates.push(`model_version = ${dto.modelVersion}`);

      return await this.prisma.$queryRaw`
        UPDATE food_embeddings
        SET ${Prisma.raw(updates.join(', '))},
            updated_at = CURRENT_TIMESTAMP
        WHERE food_id = ${foodId}::uuid
          AND language_code = ${dto.languageCode}
          AND embedding_type = ${dto.embeddingType}
        RETURNING *
      `;
    } catch (error) {
      this.logger.error(`Failed to update embedding for food ${foodId}`, error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to update food embedding',
        error,
      );
    }
  }

  async delete(
    foodId: string,
    languageCode: LanguageCode,
    embeddingType: EmbeddingType,
  ): Promise<void> {
    try {
      await this.prisma.$queryRaw`
        DELETE FROM food_embeddings
        WHERE food_id = ${foodId}::uuid
          AND language_code = ${languageCode}
          AND embedding_type = ${embeddingType}
      `;
    } catch (error) {
      this.logger.error(`Failed to delete embedding for food ${foodId}`, error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to delete food embedding',
        error,
      );
    }
  }

  async findByFoodId(
    foodId: string,
    languageCode: LanguageCode,
    embeddingType: EmbeddingType,
  ): Promise<EmbeddingWithMetadata | null> {
    try {
      const result = await this.prisma.$queryRaw<EmbeddingWithMetadata[]>`
        SELECT *
        FROM food_embeddings
        WHERE food_id = ${foodId}::uuid
          AND language_code = ${languageCode}
          AND embedding_type = ${embeddingType}
      `;
      return result[0] || null;
    } catch (error) {
      this.logger.error(`Failed to find embedding for food ${foodId}`, error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to find food embedding',
        error,
      );
    }
  }
}
