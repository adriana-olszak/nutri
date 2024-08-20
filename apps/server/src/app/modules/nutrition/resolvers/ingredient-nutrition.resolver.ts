import { Resolver, ResolveField, Parent, Args } from '@nestjs/graphql';
import { NutritionService } from '../nutrition.service';
import { NutritionalValue } from '../../../graphql/models/nutritional-value.model';
import { RecipeIngredient } from '../../../graphql/models/recipe-ingredient.model';

@Resolver(() => RecipeIngredient)
export class IngredientNutritionResolver {
  constructor(private nutritionService: NutritionService) {
  }

  @ResolveField(() => NutritionalValue)
  async nutritionalValue(
    @Parent() recipeIngredient: RecipeIngredient,
    @Args('servings', { type: () => Number, nullable: true }) servings?: number
  ): Promise<NutritionalValue> {
    return this.nutritionService.calculateRecipeIngredientNutritionalValue(recipeIngredient.id, servings);
  }
}
