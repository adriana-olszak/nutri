import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from '@nutri/server-db-client';
import DataLoader from 'dataloader';
import { Nutrient } from '../../@generated/nutrient/nutrient.model';
import { MeasureUnit } from '../../@generated/measure-unit/measure-unit.model';
import { NutritionLabel } from '../../@generated/nutrition-label/nutrition-label.model';
import { FoodNutrient } from '../../@generated/food-nutrient/food-nutrient.model';
import { FoodPortion } from '../../@generated/food-portion/food-portion.model';
import { FoodCategoryOnFood } from '../../@generated/food-category-on-food/food-category-on-food.model';
import { BrandedFood } from '../../@generated/branded-food/branded-food.model';
import { FoodCategory } from '../../@generated/food-category/food-category.model';

@Injectable({ scope: Scope.REQUEST })
export class FoodDataLoader {
  constructor(private prisma: PrismaService) {
  }

  public readonly batchNutrients = new DataLoader<string, Nutrient>(
    async (ids: readonly string[]): Promise<(Nutrient | Error)[]> => {
      try {
        const nutrients = await this.prisma.nutrient.findMany({
          where: { id: { in: ids as string[] } },
          include: {
            _count: true
          }
        });

        const nutrientMap = new Map(nutrients.map(n => [n.id, n]));
        return ids.map(id => nutrientMap.get(id) || new Error(`Nutrient with id ${id} not found`));
      } catch (error) {
        return ids.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchMeasureUnits = new DataLoader<string, MeasureUnit>(
    async (names: readonly string[]): Promise<(MeasureUnit | Error)[]> => {
      try {
        const measureUnits = await this.prisma.measureUnit.findMany({
          where: { name: { in: names as string[] } },
          include: {
            FoodPortion: true,
            importInfo: true,
            _count: true
          }
        });

        const measureUnitMap = new Map(measureUnits.map(m => [m.name, m]));
        return names.map(name => measureUnitMap.get(name) || new Error(`MeasureUnit with name ${name} not found`));
      } catch (error) {
        return names.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchNutritionLabels = new DataLoader<string, NutritionLabel>(
    async (ids: readonly string[]): Promise<(NutritionLabel | Error)[]> => {
      try {
        const nutritionLabels = await this.prisma.nutritionLabel.findMany({
          where: { id: { in: ids as string[] } },
          include: {
            brandedFood: true
          }
        });

        const nutritionLabelMap = new Map(nutritionLabels.map(n => [n.id, n]));
        return ids.map(id => nutritionLabelMap.get(id) || new Error(`NutritionLabel with id ${id} not found`));
      } catch (error) {
        return ids.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchFoodNutrients = new DataLoader<string, FoodNutrient[]>(
    async (foodIds: readonly string[]): Promise<(FoodNutrient[] | Error)[]> => {
      try {
        const foodNutrients = await this.prisma.foodNutrient.findMany({
          where: { foodId: { in: foodIds as string[] } }
        });

        const foodNutrientMap = new Map<string, FoodNutrient[]>();
        foodNutrients.forEach(fn => {
          if (!foodNutrientMap.has(fn.foodId)) {
            foodNutrientMap.set(fn.foodId, []);
          }
          foodNutrientMap.get(fn.foodId)!.push(fn);
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
          foodPortionMap.get(fp.foodId)!.push(fp);
        });

        return foodIds.map(id => foodPortionMap.get(id) || []);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchFoodCategoriesOnFood = new DataLoader<string, FoodCategoryOnFood[]>(
    async (foodIds: readonly string[]): Promise<(FoodCategoryOnFood[] | Error)[]> => {
      try {
        const foodCategoriesOnFood = await this.prisma.foodCategoryOnFood.findMany({
          where: { foodId: { in: foodIds as string[] } },
          include: { category: true }
        });

        const foodCategoryMap = new Map<string, FoodCategoryOnFood[]>();
        foodCategoriesOnFood.forEach(fc => {
          if (!foodCategoryMap.has(fc.foodId)) {
            foodCategoryMap.set(fc.foodId, []);
          }
          foodCategoryMap.get(fc.foodId)!.push(fc);
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
        return foodIds.map(id => brandedFoodMap.get(id) || null);
      } catch (error) {
        return foodIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );

  public readonly batchFoodCategories = new DataLoader<string, FoodCategory>(
    async (categoryIds: readonly string[]): Promise<(FoodCategory | Error)[]> => {
      try {
        const categories = await this.prisma.foodCategory.findMany({
          where: { id: { in: categoryIds as string[] } }
        });

        const categoryMap = new Map(categories.map(c => [c.id, c]));
        return categoryIds.map(id => categoryMap.get(id) || new Error(`FoodCategory with id ${id} not found`));
      } catch (error) {
        return categoryIds.map(() => error instanceof Error ? error : new Error('An unknown error occurred'));
      }
    }
  );
}
