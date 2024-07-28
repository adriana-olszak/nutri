import { FoodDataSource } from '../../config';
import { FoodData, NutrientData, FoodCategoryData, FoodNutrientData, TransformerStrategy } from './interfaces';
import { getTransformerStrategy } from './strategy.factory';

export class DataTransformer {
  private strategy: TransformerStrategy;

  constructor(dataSource: FoodDataSource) {
    this.strategy = getTransformerStrategy(dataSource);
  }

  transformFood(foodData: Record<string, any>): FoodData {
    return this.strategy.transformFood(foodData);
  }

  transformNutrient(nutrientData: Record<string, any>): NutrientData {
    return this.strategy.transformNutrient(nutrientData);
  }

  transformFoodCategory(foodCategoryData: Record<string, any>): FoodCategoryData {
    return this.strategy.transformFoodCategory(foodCategoryData);
  }

  transformFoodNutrient(foodNutrientData: Record<string, any>): FoodNutrientData {
    return this.strategy.transformFoodNutrient(foodNutrientData);
  }
}
