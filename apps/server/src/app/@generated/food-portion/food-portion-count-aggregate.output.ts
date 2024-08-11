import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodPortionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    gramWeight!: number;

    @Field(() => Int, {nullable:false})
    portionDescription!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    foodId!: number;

    @Field(() => Int, {nullable:false})
    measureUnitName!: number;

    @Field(() => Int, {nullable:false})
    importInfoId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
