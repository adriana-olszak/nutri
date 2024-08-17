import { RecipeResolver } from './recipe.resolver';
import { RecipePartResolver } from './recipe.part';
import { RecipeIngredientResolver } from './recipe.ingredient';

export const RECIPE_RESOLVERS = [RecipeResolver, RecipePartResolver, RecipeIngredientResolver]
