import { Food } from '../../../@generated/food/food.model';
import { BrandedFood } from '../../../@generated/branded-food/branded-food.model';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FoodSearchResult {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  rank: number;

  @Field(() => Food, { nullable: true })
  food?: Food;

  @Field(() => BrandedFood, { nullable: true })
  brandedFood?: BrandedFood;
}
