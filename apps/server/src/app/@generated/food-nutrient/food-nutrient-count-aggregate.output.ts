import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodNutrientCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    foodId!: number;

    @Field(() => Int, {nullable:false})
    nutrientId!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    min!: number;

    @Field(() => Int, {nullable:false})
    median!: number;

    @Field(() => Int, {nullable:false})
    max!: number;

    @Field(() => Int, {nullable:false})
    confidenceCode!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    importInfoId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
