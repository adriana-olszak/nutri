import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';
import { FoodSearchInput } from '../inputs/food-search.input';

@ArgsType()
export class FoodSearchArgs {
  @Field(() => FoodSearchInput)
  input: FoodSearchInput;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  @Max(50)
  limit?: number;
}
