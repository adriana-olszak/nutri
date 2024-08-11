import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    partId = "partId",
    foodId = "foodId",
    quantity = "quantity",
    unit = "unit"
}


registerEnumType(RecipeIngredientScalarFieldEnum, { name: 'RecipeIngredientScalarFieldEnum', description: undefined })
