import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { ManualReviewDataLoader } from '../manual-review.data-loader';
import { MatchFood } from '../../../graphql/models/match-food.model';
import { Food } from '../../../graphql/models/food.model';

@Resolver(() => MatchFood)
export class MatchFoodResolver {
  constructor(private readonly manualReviewDataLoader: ManualReviewDataLoader) {
  }

  @ResolveField(() => Food)
  async food(@Parent() matchFood: MatchFood): Promise<Food> {
    return this.manualReviewDataLoader.batchFoods.load(matchFood.foodId);
  }
}
