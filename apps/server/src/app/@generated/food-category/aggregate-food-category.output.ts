import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodCategoryCountAggregate } from './food-category-count-aggregate.output';
import { FoodCategoryAvgAggregate } from './food-category-avg-aggregate.output';
import { FoodCategorySumAggregate } from './food-category-sum-aggregate.output';
import { FoodCategoryMinAggregate } from './food-category-min-aggregate.output';
import { FoodCategoryMaxAggregate } from './food-category-max-aggregate.output';

@ObjectType()
export class AggregateFoodCategory {

    @Field(() => FoodCategoryCountAggregate, {nullable:true})
    _count?: FoodCategoryCountAggregate;

    @Field(() => FoodCategoryAvgAggregate, {nullable:true})
    _avg?: FoodCategoryAvgAggregate;

    @Field(() => FoodCategorySumAggregate, {nullable:true})
    _sum?: FoodCategorySumAggregate;

    @Field(() => FoodCategoryMinAggregate, {nullable:true})
    _min?: FoodCategoryMinAggregate;

    @Field(() => FoodCategoryMaxAggregate, {nullable:true})
    _max?: FoodCategoryMaxAggregate;
}
