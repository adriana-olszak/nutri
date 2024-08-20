import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Food } from './food.model';

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
