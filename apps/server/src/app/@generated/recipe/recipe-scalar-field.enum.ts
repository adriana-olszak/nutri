import { registerEnumType } from '@nestjs/graphql';

export enum RecipeScalarFieldEnum {
    id = "id",
    title = "title",
    sourceId = "sourceId",
    sourceUrl = "sourceUrl",
    description = "description",
    cookingTime = "cookingTime",
    prepTime = "prepTime",
    servingsText = "servingsText",
    servingsMin = "servingsMin",
    servingsMax = "servingsMax",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeScalarFieldEnum, { name: 'RecipeScalarFieldEnum', description: undefined })
