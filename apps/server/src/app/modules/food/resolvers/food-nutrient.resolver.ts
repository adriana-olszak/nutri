import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { FoodNutrient } from '../../../@generated/food-nutrient/food-nutrient.model';
import { Nutrient } from '../../../@generated/nutrient/nutrient.model';
import { FoodDataLoader } from '../food.data-loader';

@Resolver(() => FoodNutrient)
export class FoodNutrientResolver {
  constructor(private readonly foodDataLoader: FoodDataLoader) {}

  @ResolveField(() => Nutrient)
  async nutrient(@Parent() foodNutrient: FoodNutrient) {
    return this.foodDataLoader.batchNutrients.load(foodNutrient.nutrientId);
  }
}
