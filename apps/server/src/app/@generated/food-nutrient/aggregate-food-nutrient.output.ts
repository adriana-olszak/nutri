import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodNutrientCountAggregate } from './food-nutrient-count-aggregate.output';
import { FoodNutrientAvgAggregate } from './food-nutrient-avg-aggregate.output';
import { FoodNutrientSumAggregate } from './food-nutrient-sum-aggregate.output';
import { FoodNutrientMinAggregate } from './food-nutrient-min-aggregate.output';
import { FoodNutrientMaxAggregate } from './food-nutrient-max-aggregate.output';

@ObjectType()
export class AggregateFoodNutrient {

    @Field(() => FoodNutrientCountAggregate, {nullable:true})
    _count?: FoodNutrientCountAggregate;

    @Field(() => FoodNutrientAvgAggregate, {nullable:true})
    _avg?: FoodNutrientAvgAggregate;

    @Field(() => FoodNutrientSumAggregate, {nullable:true})
    _sum?: FoodNutrientSumAggregate;

    @Field(() => FoodNutrientMinAggregate, {nullable:true})
    _min?: FoodNutrientMinAggregate;

    @Field(() => FoodNutrientMaxAggregate, {nullable:true})
    _max?: FoodNutrientMaxAggregate;
}
