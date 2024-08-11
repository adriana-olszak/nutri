import { registerEnumType } from '@nestjs/graphql';

export enum FoodSearchVectorScalarFieldEnum {
    id = "id",
    foodId = "foodId",
    languageCode = "languageCode"
}


registerEnumType(FoodSearchVectorScalarFieldEnum, { name: 'FoodSearchVectorScalarFieldEnum', description: undefined })
