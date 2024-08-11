import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCountAggregate } from './food-category-on-food-count-aggregate.output';
import { FoodCategoryOnFoodMinAggregate } from './food-category-on-food-min-aggregate.output';
import { FoodCategoryOnFoodMaxAggregate } from './food-category-on-food-max-aggregate.output';

@ObjectType()
export class AggregateFoodCategoryOnFood {

    @Field(() => FoodCategoryOnFoodCountAggregate, {nullable:true})
    _count?: FoodCategoryOnFoodCountAggregate;

    @Field(() => FoodCategoryOnFoodMinAggregate, {nullable:true})
    _min?: FoodCategoryOnFoodMinAggregate;

    @Field(() => FoodCategoryOnFoodMaxAggregate, {nullable:true})
    _max?: FoodCategoryOnFoodMaxAggregate;
}
