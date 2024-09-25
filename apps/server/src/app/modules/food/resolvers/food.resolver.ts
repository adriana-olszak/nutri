import { Resolver, Query, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { FoodService } from '../food.service';
import { FoodSearchResult } from '../../../graphql/models/food-search-result.model';
import { FoodSearchArgs } from '../../../graphql/args/food-search.args';
import { FoodDataLoader } from '../food.data-loader';
import { FoodPaginatedModel } from '../../../graphql/models/food-paginated.model';
import { PaginationArgs } from '../../../graphql/args/pagination.args';
import { FoodNutrient } from '../../../graphql/models/food-nutrient.model';
import { Food } from '../../../graphql/models/food.model';
import { FoodPortion } from '../../../graphql/models/food-portion.model';
import { FoodOrderByInput } from '../../../graphql/inputs/food-order-by.input';
import { FoodWhereInput } from '../../../graphql/inputs/food-where.input';

@Resolver(() => Food)
export class FoodResolver {
  constructor(
    private readonly foodService: FoodService,
    private readonly foodDataLoader: FoodDataLoader
  ) {
  }

  @Query(() => Food, { name: 'food', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.foodService.findOne(id);
  }

  @Query(() => FoodPaginatedModel, { name: 'paginatedFoods' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs,
                         @Args('sortInput', { nullable: true }) sortInput?: FoodOrderByInput,
                         @Args('filterInput', { nullable: true }) filterInput?: FoodWhereInput
  ) {
    return this.foodService.paginatedFindAll(
      options,
      sortInput,
      filterInput);
  }

  @Query(() => [FoodSearchResult])
  async foodAutosuggest(@Args() args: FoodSearchArgs): Promise<FoodSearchResult[]> {
    const { name, similarityThreshold = 0.3, nonBrandedBoost = 1.5 } = args.input;
    const { limit } = args;

    const results = await this.foodService.smartSearch(name, limit, similarityThreshold, nonBrandedBoost);

    return results.map((result) => ({
      id: result.id,
      description: result.description,
      rank: result.rank,
      food: {
        id: result.id,
        description: result.description
      }
    }));
  }

  @ResolveField(() => ID)
  async id(@Parent() food: Partial<Food>) {
    if (food.id !== undefined) return food.id;
    return (await this.foodService.findOne(food.id)).id;
  }


  @ResolveField(() => String)
  async description(@Parent() food: Partial<Food>) {
    if (food.description !== undefined) return food.description;
    return (await this.foodService.findOne(food.id)).description;
  }


  @ResolveField(() => Date)
  async updatedAt(@Parent() food: Partial<Food>) {
    if (food.updatedAt !== undefined) return food.updatedAt;
    return (await this.foodService.findOne(food.id)).updatedAt;
  }

  @ResolveField(() => [FoodNutrient])
  async nutrients(@Parent() food: Partial<Food>) {
    return this.foodDataLoader.batchFoodNutrients.load(food.id);

  }

  @ResolveField(() => [FoodPortion])
  async portions(@Parent() food: Partial<Food>) {
    return this.foodDataLoader.batchFoodPortions.load(food.id);
  }

  @ResolveField(() => String, { nullable: true })
  async scientificName(@Parent() food: Partial<Food>) {
    if (food.scientificName !== undefined) return food.scientificName;
    return (await this.foodService.findOne(food.id)).scientificName;
  }

  @ResolveField(() => Date)
  async createdAt(@Parent() food: Partial<Food>) {
    if (food.createdAt !== undefined) return food.createdAt;
    return (await this.foodService.findOne(food.id)).createdAt;
  }
}
