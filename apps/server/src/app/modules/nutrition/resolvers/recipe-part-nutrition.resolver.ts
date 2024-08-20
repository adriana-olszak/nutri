import { Resolver, ResolveField, Parent, Args } from '@nestjs/graphql';
import { NutritionService } from '../nutrition.service';
import { NutritionalValue } from '../../../graphql/models/nutritional-value.model';
import { RecipePart } from '../../../graphql/models/recipe-part.model';

@Resolver(() => RecipePart)
export class RecipePartNutritionResolver {
  constructor(private nutritionService: NutritionService) {
  }

  @ResolveField(() => NutritionalValue)
  async nutritionalValue(
    @Parent() recipePart: RecipePart,
    @Args('servings', { type: () => Number, nullable: true }) servings?: number
  ): Promise<NutritionalValue> {
    return this.nutritionService.calculateRecipePartNutritionalValue(recipePart.id, servings);
  }
}
