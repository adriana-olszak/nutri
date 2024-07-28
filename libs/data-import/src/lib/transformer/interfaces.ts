// transformer/interfaces.ts
import { FoodDataSource } from '../../config';

export interface FoodData {
  fdcId: string;
  description: string;
  foodCategoryId: string;
  dataSource: FoodDataSource;
  // Add other relevant fields
}

export interface NutrientData {
  id: string;
  name: string;
  unit: string;
  // Add other relevant fields
}

export interface FoodCategoryData {
  id: string;
  name: string;
  // Add other relevant fields
}

export interface FoodNutrientData {
  foodId: string;
  nutrientId: string;
  amount: number;
  // Add other relevant fields
}

export interface TransformerStrategy {
  transformFood(foodData: Record<string, any>): FoodData;
  transformNutrient(nutrientData: Record<string, any>): NutrientData;
  transformFoodCategory(foodCategoryData: Record<string, any>): FoodCategoryData;
  transformFoodNutrient(foodNutrientData: Record<string, any>): FoodNutrientData;
}
