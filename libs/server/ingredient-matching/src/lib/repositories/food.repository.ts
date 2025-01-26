import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import {
    ErrorCodes,
    FoodCandidate,
    IFoodRepository,
    IngredientMatchingError
} from '../types';

@Injectable()
export class FoodRepository implements IFoodRepository {
  logger = new Logger(FoodRepository.name);
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async findSimilarFoods(
      embedding: number[],
      limit = 100,
      similarityThreshold = 0.6,
    ): Promise<Array<{ id: string; description: string; similarity: number }>> {
      try {
        // Using pgvector's L2 distance or cosine similarity
        const results = await this.prisma.$queryRaw<{ id: string; description: string; similarity: number }[]>`
          SELECT
            f.id,
            f.description,
            1 - (fe.embedding <=> ${embedding}::vector) as similarity
          FROM foods f
          INNER JOIN food_embeddings fe ON fe.food_id = f.id
          WHERE fe.embedding_type = 'sentenceTransformer'
            AND fe.language_code = 'en'
            AND 1 - (fe.embedding <=> ${embedding}::vector) > ${similarityThreshold}
          ORDER BY similarity DESC
          LIMIT ${limit}
        `;

        return results;
      } catch (error) {
        this.logger.error('Failed to find similar foods', error);
        throw new IngredientMatchingError(
          ErrorCodes.DATABASE_ERROR,
          'Failed to find similar foods',
          error,
        );
      }
    }

  async getFoodCandidatesWithEmbeddings(modelVersion = '1.0.0'): Promise<FoodCandidate[]> {
    try {
          // Using raw query to fetch embeddings
          const result = await this.prisma.$queryRaw<Array<{
            id: string;
            description: string;
            embedding: number[];
          }>>`
            SELECT
              f.id,
              f.description,
              fe.embedding
            FROM foods f
            INNER JOIN food_embeddings fe ON fe.food_id = f.id
            WHERE fe.embedding_type = 'BI_ENCODER'
              AND fe.language_code = 'en'
              AND fe.model_version = ${modelVersion}
          `;

          if (!result.length) {
            this.logger.warn('No food candidates with embeddings found');
            throw new IngredientMatchingError(
              ErrorCodes.NO_CANDIDATES,
              'No food candidates with embeddings found',
            );
          }

          return result.map(food => ({
            id: food.id,
            description: food.description,
            embedding: food.embedding,
          }));
        } catch (error) {
          if (error instanceof IngredientMatchingError) {
            throw error;
          }

          this.logger.error('Failed to get food candidates with embeddings', error);
          throw new IngredientMatchingError(
            ErrorCodes.DATABASE_ERROR,
            'Failed to get food candidates',
            error,
          );
        }
  }

  async getFoodDescriptionById(id: string): Promise<string> {
    try {
      const food = await this.prisma.food.findUnique({
        where: { id },
        select: { description: true },
      });

      if (!food) {
        throw new IngredientMatchingError(
          ErrorCodes.MATCH_NOT_FOUND,
          `Food with id ${id} not found`,
        );
      }

      return food.description;
    } catch (error) {
      this.logger.error(`Failed to get food description for id ${id}`, error);
      throw new IngredientMatchingError(
        ErrorCodes.DATABASE_ERROR,
        'Failed to get food description',
        error,
      );
    }
  }

  async getFoodEmbeddings(foodIds: string[], modelVersion ='1.0.0'): Promise<Array<{
      foodId: string;
      embedding: number[];
    }>> {
      try {
        const result = await this.prisma.$queryRaw<Array<{
          food_id: string;
          embedding: number[];
        }>>`
          SELECT
            food_id,
            embedding
          FROM food_embeddings
          WHERE food_id = ANY(${foodIds}::uuid[])
            AND embedding_type = 'BI_ENCODER'
            AND language_code = 'en'
            AND model_version = ${modelVersion}
        `;

        return result.map(row => ({
          foodId: row.food_id,
          embedding: row.embedding,
        }));
      } catch (error) {
        this.logger.error('Failed to get food embeddings', error);
        throw new IngredientMatchingError(
          ErrorCodes.DATABASE_ERROR,
          'Failed to get food embeddings',
          error,
        );
      }
    }

    // Optional: Method to update embeddings
    async updateFoodEmbeddings(
      foodId: string,
      embedding: number[],
      modelVersion: string,
    ): Promise<void> {
      try {
        await this.prisma.$executeRaw`
          INSERT INTO food_embeddings (
            food_id,
            embedding_type,
            language_code,
            model_version,
            embedding
          )
          VALUES (
            ${foodId},
            'BI_ENCODER',
            'en',
            ${modelVersion},
            ${embedding}
          )
          ON CONFLICT (food_id, language_code, embedding_type)
          DO UPDATE SET
            embedding = EXCLUDED.embedding,
            model_version = EXCLUDED.model_version,
            updated_at = CURRENT_TIMESTAMP
        `;
      } catch (error) {
        this.logger.error(
          `Failed to update embeddings for food ${foodId}`,
          error,
        );
        throw new IngredientMatchingError(
          ErrorCodes.DATABASE_ERROR,
          'Failed to update food embeddings',
          error,
        );
      }
    }
}
