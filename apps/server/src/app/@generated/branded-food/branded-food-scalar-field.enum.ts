import { registerEnumType } from '@nestjs/graphql';

export enum BrandedFoodScalarFieldEnum {
    id = "id",
    foodId = "foodId",
    brandOwner = "brandOwner",
    gtinUpc = "gtinUpc",
    ingredients = "ingredients",
    servingSize = "servingSize",
    servingUnit = "servingUnit",
    sourceId = "sourceId",
    importInfoId = "importInfoId"
}


registerEnumType(BrandedFoodScalarFieldEnum, { name: 'BrandedFoodScalarFieldEnum', description: undefined })
