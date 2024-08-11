import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FoodNutrientAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    min?: true;

    @Field(() => Boolean, {nullable:true})
    median?: true;

    @Field(() => Boolean, {nullable:true})
    max?: true;
}
