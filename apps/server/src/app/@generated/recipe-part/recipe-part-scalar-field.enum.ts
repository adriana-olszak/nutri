import { registerEnumType } from '@nestjs/graphql';

export enum RecipePartScalarFieldEnum {
    id = "id",
    name = "name",
    recipeId = "recipeId"
}


registerEnumType(RecipePartScalarFieldEnum, { name: 'RecipePartScalarFieldEnum', description: undefined })
