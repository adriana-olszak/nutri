import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FoodSearchInput {
  @Field(() => String)
  name: string;

  @Field(() => Number, { nullable: true })
  similarityThreshold?: number;

  @Field(() => Number, { nullable: true })
  nonBrandedBoost?: number;
}
