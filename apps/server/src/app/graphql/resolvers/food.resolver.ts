import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Food } from '../../@generated/food/food.model';
import { FoodService } from '../../services/food.service';
import { FoodSearchResult } from '../models/food/food-search-result.model';
import { FoodSearchArgs } from '../args/food-search.args';

@Resolver(() => Food)
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {
  }

  @Query(() => Food, { name: 'food' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.foodService.findOne(id);
  }

  @Query(() => [FoodSearchResult])
  async foodAutosuggest(@Args() args: FoodSearchArgs): Promise<FoodSearchResult[]> {
    const { name } = args.input;
    const { limit } = args;

    const results = await this.foodService.smartSearch(name, limit);

    return results.map((result) => ({
      id: result.id,
      description: result.description,
      rank: result.rank,
      food: {
        id: result.id,
        sourceId: result.sourceId,
        description: result.description,
        scientificName: result.scientificName,
        importInfoId: result.importInfoId,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
      },
      brandedFood: result.brandedFoodId
        ? {
          id: result.brandedFoodId,
          foodId: result.id,
          brandOwner: result.brandOwner,
          gtinUpc: result.gtinUpc,
          ingredients: result.ingredients,
          servingSize: result.servingSize,
          servingUnit: result.servingUnit,
          sourceId: result.brandedSourceId,
          importInfoId: result.brandedImportInfoId
        }
        : null
    }));
  }
}
