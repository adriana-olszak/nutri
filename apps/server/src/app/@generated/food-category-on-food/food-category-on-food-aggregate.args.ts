import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodWhereInput } from './food-category-on-food-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodOrderByWithRelationInput } from './food-category-on-food-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodCategoryOnFoodCountAggregateInput } from './food-category-on-food-count-aggregate.input';
import { FoodCategoryOnFoodMinAggregateInput } from './food-category-on-food-min-aggregate.input';
import { FoodCategoryOnFoodMaxAggregateInput } from './food-category-on-food-max-aggregate.input';

@ArgsType()
export class FoodCategoryOnFoodAggregateArgs {

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereInput)
    where?: FoodCategoryOnFoodWhereInput;

    @Field(() => [FoodCategoryOnFoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodCategoryOnFoodOrderByWithRelationInput>;

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;

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
