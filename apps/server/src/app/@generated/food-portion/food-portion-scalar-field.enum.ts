import { registerEnumType } from '@nestjs/graphql';

export enum FoodPortionScalarFieldEnum {
    id = "id",
    amount = "amount",
    gramWeight = "gramWeight",
    portionDescription = "portionDescription",
    sourceId = "sourceId",
    foodId = "foodId",
    measureUnitName = "measureUnitName",
    importInfoId = "importInfoId"
}


registerEnumType(FoodPortionScalarFieldEnum, { name: 'FoodPortionScalarFieldEnum', description: undefined })
