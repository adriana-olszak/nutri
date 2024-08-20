import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { RecipeDataLoader } from '../recipe.data-loader';
import { RecipeIngredient } from '../../../graphql/models/recipe-ingredient.model';
import { Food } from '../../../graphql/models/food.model';

@Resolver(() => RecipeIngredient)
export class RecipeIngredientResolver {
  constructor(private readonly recipeDataLoader: RecipeDataLoader) {
  }

  @ResolveField(() => Food)
  async food(@Parent() ingredient: RecipeIngredient): Promise<Food> {
    return this.recipeDataLoader.batchFoods.load(ingredient.foodId);
  }
}
