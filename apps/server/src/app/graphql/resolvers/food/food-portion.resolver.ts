import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { FoodDataLoader } from '../../data-loaders/food.data-loader';
import { FoodPortion } from '../../../@generated/food-portion/food-portion.model';
import { MeasureUnit } from '../../../@generated/measure-unit/measure-unit.model';

@Resolver(() => FoodPortion)
export class FoodPortionResolver {
  constructor(private readonly foodDataLoader: FoodDataLoader) {}

  @ResolveField(() => MeasureUnit)
  async measureUnit(@Parent() foodPortion: FoodPortion) {
    return this.foodDataLoader.batchMeasureUnits.load(foodPortion.measureUnitName);
  }
}
