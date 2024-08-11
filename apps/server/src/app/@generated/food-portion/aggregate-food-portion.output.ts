import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodPortionCountAggregate } from './food-portion-count-aggregate.output';
import { FoodPortionAvgAggregate } from './food-portion-avg-aggregate.output';
import { FoodPortionSumAggregate } from './food-portion-sum-aggregate.output';
import { FoodPortionMinAggregate } from './food-portion-min-aggregate.output';
import { FoodPortionMaxAggregate } from './food-portion-max-aggregate.output';

@ObjectType()
export class AggregateFoodPortion {

    @Field(() => FoodPortionCountAggregate, {nullable:true})
    _count?: FoodPortionCountAggregate;

    @Field(() => FoodPortionAvgAggregate, {nullable:true})
    _avg?: FoodPortionAvgAggregate;

    @Field(() => FoodPortionSumAggregate, {nullable:true})
    _sum?: FoodPortionSumAggregate;

    @Field(() => FoodPortionMinAggregate, {nullable:true})
    _min?: FoodPortionMinAggregate;

    @Field(() => FoodPortionMaxAggregate, {nullable:true})
    _max?: FoodPortionMaxAggregate;
}
