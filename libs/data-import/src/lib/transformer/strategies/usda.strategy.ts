import { FoodDataSource } from '../../../config';
import { FoodData, NutrientData, TransformerStrategy } from '../interfaces';

export class USDATransformerStrategy implements TransformerStrategy {
  transformFood(foodData: Record<string, any>): FoodData {
    return {
      fdcId: foodData.fdc_id,
      description: foodData.description,
      foodCategoryId: foodData.food_category_id,
      dataSource: FoodDataSource.USDA
      // Map other fields
    };
  }

  transformNutrient(nutrientData: Record<string, any>): NutrientData {
    return {
      id: nutrientData.id,
      name: nutrientData.name,
      unit: nutrientData.unit_name
      // Map other fields
    };
  }
}
