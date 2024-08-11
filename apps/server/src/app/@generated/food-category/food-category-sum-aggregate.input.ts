import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodCategorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    level?: true;
}
