import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { RecipeDataLoader } from '../../data-loaders/recipe.data-loader';
import { RecipePart } from '../../../@generated/recipe-part/recipe-part.model';
import { RecipeIngredient } from '../../../@generated/recipe-ingredient/recipe-ingredient.model';

@Resolver(() => RecipePart)
export class RecipePartResolver {
  constructor(private readonly recipeDataLoader: RecipeDataLoader) {
  }

  @ResolveField(() => [RecipeIngredient])
  async ingredients(@Parent() recipePart: RecipePart): Promise<RecipeIngredient[]> {
    return this.recipeDataLoader.batchIngredientsByPart.load(recipePart.id);
  }
}
