import { RecipeResolver } from './recipe.resolver';
import { RecipePartResolver } from './recipe-part.resolver';
import { RecipeIngredientResolver } from './recipe-ingredient.resolver';

export const RECIPE_RESOLVERS = [RecipeResolver, RecipePartResolver, RecipeIngredientResolver];
