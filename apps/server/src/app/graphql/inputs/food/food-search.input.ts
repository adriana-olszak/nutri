import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FoodSearchInput {
  @Field(() => String)
  name: string;
}
