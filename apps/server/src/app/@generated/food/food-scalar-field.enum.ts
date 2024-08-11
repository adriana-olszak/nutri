import { registerEnumType } from '@nestjs/graphql';

export enum FoodScalarFieldEnum {
    id = "id",
    sourceId = "sourceId",
    description = "description",
    scientificName = "scientificName",
    importInfoId = "importInfoId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FoodScalarFieldEnum, { name: 'FoodScalarFieldEnum', description: undefined })
