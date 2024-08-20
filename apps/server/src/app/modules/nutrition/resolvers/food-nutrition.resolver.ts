import { Resolver, ResolveField, Parent, Args } from '@nestjs/graphql';
import { NutritionService } from '../nutrition.service';
import { Food } from '../../../graphql/models/food.model';
import { NutritionalValue } from '../../../graphql/models/nutritional-value.model';

@Resolver(() => Food)
export class FoodNutritionResolver {
  constructor(private nutritionService: NutritionService) {
  }

  @ResolveField(() => NutritionalValue)
  async nutritionalValue(
    @Parent() food: Food,
    @Args('amount', { type: () => Number, defaultValue: 100 }) amount: number
  ): Promise<NutritionalValue> {
    return this.nutritionService.calculateFoodNutritionalValue(food.id, amount);
  }
}
