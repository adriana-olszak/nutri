import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodWhereInput } from './food-category-on-food-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodOrderByWithAggregationInput } from './food-category-on-food-order-by-with-aggregation.input';
import { FoodCategoryOnFoodScalarFieldEnum } from './food-category-on-food-scalar-field.enum';
import { FoodCategoryOnFoodScalarWhereWithAggregatesInput } from './food-category-on-food-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodCategoryOnFoodCountAggregateInput } from './food-category-on-food-count-aggregate.input';
import { FoodCategoryOnFoodMinAggregateInput } from './food-category-on-food-min-aggregate.input';
import { FoodCategoryOnFoodMaxAggregateInput } from './food-category-on-food-max-aggregate.input';

@ArgsType()
export class FoodCategoryOnFoodGroupByArgs {

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereInput)
    where?: FoodCategoryOnFoodWhereInput;

    @Field(() => [FoodCategoryOnFoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodCategoryOnFoodOrderByWithAggregationInput>;

    @Field(() => [FoodCategoryOnFoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodCategoryOnFoodScalarFieldEnum>;

    @Field(() => FoodCategoryOnFoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodCategoryOnFoodScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodCategoryOnFoodCountAggregateInput, {nullable:true})
    _count?: FoodCategoryOnFoodCountAggregateInput;

    @Field(() => FoodCategoryOnFoodMinAggregateInput, {nullable:true})
    _min?: FoodCategoryOnFoodMinAggregateInput;

    @Field(() => FoodCategoryOnFoodMaxAggregateInput, {nullable:true})
    _max?: FoodCategoryOnFoodMaxAggregateInput;
}
