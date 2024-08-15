import { registerEnumType } from '@nestjs/graphql';

export enum RecipeInstructionsScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    content = "content",
    type = "type",
    order = "order",
    listIndex = "listIndex"
}


registerEnumType(RecipeInstructionsScalarFieldEnum, { name: 'RecipeInstructionsScalarFieldEnum', description: undefined })
