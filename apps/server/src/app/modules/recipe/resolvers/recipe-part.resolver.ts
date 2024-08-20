import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { RecipeDataLoader } from '../recipe.data-loader';
import { RecipeIngredient } from '../../../graphql/models/recipe-ingredient.model';
import { RecipePart } from '../../../graphql/models/recipe-part.model';

@Resolver(() => RecipePart)
export class RecipePartResolver {
  constructor(private readonly recipeDataLoader: RecipeDataLoader) {
  }

  @ResolveField(() => [RecipeIngredient])
  async ingredients(@Parent() recipePart: RecipePart): Promise<RecipeIngredient[]> {
    return this.recipeDataLoader.batchIngredientsByPart.load(recipePart.id);
  }
}
