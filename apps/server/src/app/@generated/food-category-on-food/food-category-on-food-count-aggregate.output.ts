import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCategoryOnFoodCountAggregate {

    @Field(() => Int, {nullable:false})
    foodId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    isPrimaryCategory!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
