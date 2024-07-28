import { FoodDataSource } from '../../../config';
import { FoodData, NutrientData, TransformerStrategy } from '../interfaces';

export class CIQUALTransformerStrategy implements TransformerStrategy {
  transformFood(foodData: Record<string, any>): FoodData {
    return {
      fdcId: foodData.code,
      description: foodData.name,
      foodCategoryId: foodData.group_code,
      dataSource: FoodDataSource.CIQUAL
      // Map other fields
    };
  }

  transformNutrient(nutrientData: Record<string, any>): NutrientData {
    return {
      id: nutrientData.code,
      name: nutrientData.name,
      unit: nutrientData.unit
      // Map other fields
    };
  }
}
