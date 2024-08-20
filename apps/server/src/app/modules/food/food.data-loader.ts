import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import DataLoader from 'dataloader';
import { FoodNutrient } from '../../graphql/models/food-nutrient.model';
import { FoodPortion } from '../../graphql/models/food-portion.model';
import { BrandedFood } from '../../graphql/models/branded-food.model';
import { FoodCategory } from '../../graphql/models/food-category.model';

@Injectable({ scope: Scope.REQUEST })
export class FoodDataLoader {
  constructor(private prisma: PrismaService) {
  }
  public readonly batchFoodNutrients = new DataLoader<string, FoodNutrient[]>(
    async (foodIds: readonly string[]): Promise<(FoodNutrient[] | Error)[]> => {
      try {
        const foodNutrients = await this.prisma.foodNutrient.findMany({
          where: { foodId: { in: foodIds as string[] } }, include: { nutrient: true }
        });

        const foodNutrientMap = new Map<string, FoodNutrient[]>();
        foodNutrients.forEach(foodNutrient => {
          if (!foodNutrientMap.has(foodNutrient.foodId)) {
            foodNutrientMap.set(foodNutrient.foodId, []);
          }
          foodNutrientMap.get(foodNutrient.foodId)!.push({
            ...foodNutrient,
            unitName: foodNutrient.nutrient.unitName,
            name: foodNutrient.nutrient.name
          });
        });

        return foodIds.map(id => foodNutrientMap.get(id) || []);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchFoodPortions = new DataLoader<string, FoodPortion[]>(
    async (foodIds: readonly string[]): Promise<(FoodPortion[] | Error)[]> => {
      try {
        const foodPortions = await this.prisma.foodPortion.findMany({
          where: { foodId: { in: foodIds as string[] } }
        });

        const foodPortionMap = new Map<string, FoodPortion[]>();
        foodPortions.forEach(fp => {
          if (!foodPortionMap.has(fp.foodId)) {
            foodPortionMap.set(fp.foodId, []);
          }
          foodPortionMap.get(fp.foodId)?.push(fp);
        });

        return foodIds.map(id => foodPortionMap.get(id) || []);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchFoodCategories = new DataLoader<string, FoodCategory[]>(
    async (foodIds: readonly string[]): Promise<(FoodCategory[] | Error)[]> => {
      try {
        const foodCategoriesOnFood = await this.prisma.foodCategoryOnFood.findMany({
          where: { foodId: { in: foodIds as string[] } },
          include: { category: true }
        });

        const foodCategoryMap = new Map<string, FoodCategory[]>();
        foodCategoriesOnFood.forEach(fc => {
          if (!foodCategoryMap.has(fc.foodId)) {
            foodCategoryMap.set(fc.foodId, []);
          }
          foodCategoryMap.get(fc.foodId)?.push({
            id: fc.category.id,
            description: fc.category.description,
            code: fc.category.code,
          });
        });

        return foodIds.map(id => foodCategoryMap.get(id) || []);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchBrandedFoods = new DataLoader<string, BrandedFood | null>(
    async (foodIds: readonly string[]): Promise<(BrandedFood | null | Error)[]> => {
      try {
        const brandedFoods = await this.prisma.brandedFood.findMany({
          where: { foodId: { in: foodIds as string[] } },
          include: { nutritionLabel: true }
        });

        const brandedFoodMap = new Map(brandedFoods.map(bf => [bf.foodId, bf]));
        return foodIds.map(id => brandedFoodMap.get(id) || null).map(bf => {
          if (bf === null) return bf;
          return {
            ...bf,
            ingredientsLabel: bf.ingredients,
            nutritionLabel: bf.nutritionLabel
          };
        }) as (BrandedFood | null)[];
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );
}
