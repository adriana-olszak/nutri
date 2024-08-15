import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    partId = "partId",
    foodId = "foodId",
    quantity = "quantity",
    quantityText = "quantityText",
    minQuantity = "minQuantity",
    maxQuantity = "maxQuantity",
    unit = "unit",
    unitText = "unitText",
    ingredientText = "ingredientText",
    extraInfo = "extraInfo"
}


registerEnumType(RecipeIngredientScalarFieldEnum, { name: 'RecipeIngredientScalarFieldEnum', description: undefined })
