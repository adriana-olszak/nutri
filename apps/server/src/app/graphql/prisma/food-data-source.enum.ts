import { registerEnumType } from '@nestjs/graphql';

export enum FoodDataSource {
    USDA = "USDA",
    EUROFIR = "EUROFIR",
    CIQUAL = "CIQUAL",
    USER_INPUT = "USER_INPUT"
}


registerEnumType(FoodDataSource, { name: 'FoodDataSource', description: undefined })
