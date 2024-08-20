import { Resolver, ResolveField, Parent, Args } from '@nestjs/graphql';
import { NutritionService } from '../nutrition.service';
import { NutritionalValue } from '../../../graphql/models/nutritional-value.model';
import { Recipe } from '../../../graphql/models/recipe.model';

@Resolver(() => Recipe)
export class RecipeNutritionResolver {
  constructor(private nutritionService: NutritionService) {
  }

  @ResolveField(() => NutritionalValue)
  async nutritionalValue(
    @Parent() recipe: Recipe,
    @Args('servings', { type: () => Number, nullable: true }) servings?: number
  ): Promise<NutritionalValue> {
    return this.nutritionService.calculateRecipeNutritionalValue(recipe.id, servings);
  }
}
