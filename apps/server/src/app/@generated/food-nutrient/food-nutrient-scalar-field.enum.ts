import { registerEnumType } from '@nestjs/graphql';

export enum FoodNutrientScalarFieldEnum {
    id = "id",
    foodId = "foodId",
    nutrientId = "nutrientId",
    amount = "amount",
    min = "min",
    median = "median",
    max = "max",
    confidenceCode = "confidenceCode",
    sourceId = "sourceId",
    importInfoId = "importInfoId"
}


registerEnumType(FoodNutrientScalarFieldEnum, { name: 'FoodNutrientScalarFieldEnum', description: undefined })
