import { registerEnumType } from '@nestjs/graphql';

export enum FoodCategoryOnFoodScalarFieldEnum {
    foodId = "foodId",
    categoryId = "categoryId",
    isPrimaryCategory = "isPrimaryCategory"
}


registerEnumType(FoodCategoryOnFoodScalarFieldEnum, { name: 'FoodCategoryOnFoodScalarFieldEnum', description: undefined })
