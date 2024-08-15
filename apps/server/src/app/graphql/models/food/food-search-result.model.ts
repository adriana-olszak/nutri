import { Food } from '../../../@generated/food/food.model';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FoodSearchResult {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  rank: number;

  @Field(() => Food)
  food: Partial<Food>;
}
