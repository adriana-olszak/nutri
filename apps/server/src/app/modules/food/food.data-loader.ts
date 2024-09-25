import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import DataLoader from 'dataloader';
import { FoodNutrient } from '../../graphql/models/food-nutrient.model';
import { FoodPortion } from '../../graphql/models/food-portion.model';

@Injectable({ scope: Scope.REQUEST })
export class FoodDataLoader {
  constructor(private prisma: PrismaService) {
  }

  public readonly batchFoodNutrients = new DataLoader<string, FoodNutrient[]>(
    async (foodIds: readonly string[]): Promise<(FoodNutrient[] | Error)[]> => {
      try {
        const foodNutrients = await this.prisma.foodNutrient.findMany({
          where: { foodId: { in: foodIds as string[] } }, include: { nutrient: true },
        });

        const foodNutrientMap = new Map<string, FoodNutrient[]>();
        foodNutrients.forEach(foodNutrient => {
          if (!foodNutrientMap.has(foodNutrient.foodId)) {
            foodNutrientMap.set(foodNutrient.foodId, []);
          }
          foodNutrientMap.get(foodNutrient.foodId)!.push({
            id: foodNutrient.foodId,
            nutrientId: foodNutrient.nutrientId,
            amount: foodNutrient.amount,
            min: foodNutrient.min,
            median: foodNutrient.median,
            max: foodNutrient.max,
            unitName: foodNutrient.nutrient.unitName,
            name: foodNutrient.nutrient.name,
          });
        });

        return foodIds.map(id => foodNutrientMap.get(id) || []);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    },
  );

  public readonly batchFoodPortions = new DataLoader<string, FoodPortion[]>(
    async (foodIds: readonly string[]): Promise<(FoodPortion[] | Error)[]> => {
      try {
        const foodPortions = await this.prisma.foodPortion.findMany({
          where: { foodId: { in: foodIds as string[] } },
          include: {
            measureUnit: true,
          },
        });

        const foodPortionMap = new Map<string, FoodPortion[]>();
        foodPortions.forEach(fp => {
          if (!foodPortionMap.has(fp.foodId)) {
            foodPortionMap.set(fp.foodId, []);
          }
          foodPortionMap.get(fp.foodId)?.push({
            id: fp.id,
            conversionFactor: fp.covnersionFactor,
            gramWeight: fp.gramWeight,
            portionDescription: fp.measureUnit.name,
          });
        });

        return foodIds.map(id => foodPortionMap.get(id) || []);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    },
  );

}
