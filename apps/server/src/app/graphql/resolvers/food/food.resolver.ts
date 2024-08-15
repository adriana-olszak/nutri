import { Resolver, Query, Args, ID, ResolveField, Parent } from '@nestjs/graphql';
import { Food } from '../../../@generated/food/food.model';
import { FoodService } from '../../../services/food.service';
import { FoodSearchResult } from '../../models/food/food-search-result.model';
import { FoodSearchArgs } from '../../args/food-search.args';
import { FoodNutrient } from '../../../@generated/food-nutrient/food-nutrient.model';
import { FoodPortion } from '../../../@generated/food-portion/food-portion.model';
import { BrandedFood } from '../../../@generated/branded-food/branded-food.model';
import { FoodCategoryOnFood } from '../../../@generated/food-category-on-food/food-category-on-food.model';
import { FoodCount } from '../../../@generated/food/food-count.output';
import { FoodDataLoader } from '../../data-loaders/food.data-loader';

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
  async sourceId(@Parent() food: Partial<Food>) {
    if (food.sourceId !== undefined) return food.sourceId;
    return (await this.foodService.findOne(food.id)).sourceId;
  }

  @ResolveField(() => String)
  async description(@Parent() food: Partial<Food>) {
    if (food.description !== undefined) return food.description;
    return (await this.foodService.findOne(food.id)).description;
  }

  @ResolveField(() => String, { nullable: true })
  async scientificName(@Parent() food: Partial<Food>) {
    if (food.scientificName !== undefined) return food.scientificName;
    return (await this.foodService.findOne(food.id)).scientificName;
  }

  @ResolveField(() => String)
  async importInfoId(@Parent() food: Partial<Food>) {
    if (food.importInfoId !== undefined) return food.importInfoId;
    return (await this.foodService.findOne(food.id)).importInfoId;
  }

  @ResolveField(() => Date)
  async createdAt(@Parent() food: Partial<Food>) {
    if (food.createdAt !== undefined) return food.createdAt;
    return (await this.foodService.findOne(food.id)).createdAt;
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

  @ResolveField(() => [FoodCategoryOnFood])
  async categories(@Parent() food: Partial<Food>) {
    return this.foodDataLoader.batchFoodCategoriesOnFood.load(food.id);
  }

  @ResolveField(() => BrandedFood, { nullable: true })
  async brandedFood(@Parent() food: Partial<Food>) {
    return this.foodDataLoader.batchBrandedFoods.load(food.id);
  }

  @ResolveField(() => FoodCount)
  async _count(@Parent() food: Partial<Food>) {
    return this.foodService.getFoodCount(food.id);
  }
}
