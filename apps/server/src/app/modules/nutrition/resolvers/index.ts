import { RecipeNutritionResolver } from './recipe-nutrition.resolver';
import { FoodNutritionResolver } from './food-nutrition.resolver';
import { RecipePartNutritionResolver } from './recipe-part-nutrition.resolver';
import { IngredientNutritionResolver } from './ingredient-nutrition.resolver';

export const ALL_NUTRITION_RESOLVERS = [
  FoodNutritionResolver,
  RecipeNutritionResolver,
  RecipePartNutritionResolver,
  IngredientNutritionResolver,
];
