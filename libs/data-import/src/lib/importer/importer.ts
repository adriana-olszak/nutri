// File: libs/data-import/src/lib/importer/importer.ts
import { PrismaClient, Prisma } from '@prisma/client';
import { Entity, FoodData, NutrientData, FoodCategoryData, FoodNutrientData } from '../types';
import { logger } from '../logger';

export class DatabaseImporter {
  constructor(private prisma: PrismaClient) {}

  async importEntities(entities: Entity[]) {
    await this.prisma.$transaction(async (tx) => {
      await tx.$executeRaw`SET CONSTRAINTS ALL DEFERRED`;

      try {
        for (const entity of entities) {
          switch (entity.type) {
            case 'FoodCategory':
              await this.upsertFoodCategory(tx, entity as FoodCategoryData);
              break;
            case 'Food':
              await this.upsertFood(tx, entity as FoodData);
              break;
            case 'Nutrient':
              await this.upsertNutrient(tx, entity as NutrientData);
              break;
            case 'FoodNutrient':
              await this.upsertFoodNutrient(tx, entity as FoodNutrientData);
              break;
            default:
              logger.warn(`Unknown entity type: ${entity.type}`);
          }
        }
      } catch (error) {
        logger.error(`Error during import: ${error.message}`);
        throw error;
      } finally {
        await tx.$executeRaw`SET CONSTRAINTS ALL IMMEDIATE`;
      }
    }, {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    });
  }

  // Implement upsert methods for each entity type...
}
