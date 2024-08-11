import { registerEnumType } from '@nestjs/graphql';

export enum FoodCategoryScalarFieldEnum {
    id = "id",
    code = "code",
    description = "description",
    parentCategoryId = "parentCategoryId",
    level = "level",
    sourceId = "sourceId",
    importInfoId = "importInfoId"
}


registerEnumType(FoodCategoryScalarFieldEnum, { name: 'FoodCategoryScalarFieldEnum', description: undefined })
