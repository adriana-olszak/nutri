import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FoodNutrientSumAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    min?: number;

    @Field(() => Float, {nullable:true})
    median?: number;

    @Field(() => Float, {nullable:true})
    max?: number;
}
