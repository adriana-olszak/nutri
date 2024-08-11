import { registerEnumType } from '@nestjs/graphql';

export enum RecipeImageScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    url = "url",
    altText = "altText",
    width = "width",
    height = "height"
}


registerEnumType(RecipeImageScalarFieldEnum, { name: 'RecipeImageScalarFieldEnum', description: undefined })
