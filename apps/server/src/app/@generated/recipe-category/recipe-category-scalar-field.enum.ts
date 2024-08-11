import { registerEnumType } from '@nestjs/graphql';

export enum RecipeCategoryScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(RecipeCategoryScalarFieldEnum, { name: 'RecipeCategoryScalarFieldEnum', description: undefined })
