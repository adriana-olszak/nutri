import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { RecipeDataLoader } from '../recipe.data-loader';
import { RecipeIngredient } from '../../../@generated/recipe-ingredient/recipe-ingredient.model';
import { Food } from '../../../@generated/food/food.model';

@Resolver(() => RecipeIngredient)
export class RecipeIngredientResolver {
  constructor(private readonly recipeDataLoader: RecipeDataLoader) {
  }

  @ResolveField(() => Food)
  async food(@Parent() recipeIngredient: RecipeIngredient): Promise<Food> {
    return this.recipeDataLoader.batchFoods.load(recipeIngredient.foodId);
  }
}
