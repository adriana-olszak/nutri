import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCategoryCountAggregate } from './food-category-count-aggregate.output';
import { FoodCategoryAvgAggregate } from './food-category-avg-aggregate.output';
import { FoodCategorySumAggregate } from './food-category-sum-aggregate.output';
import { FoodCategoryMinAggregate } from './food-category-min-aggregate.output';
import { FoodCategoryMaxAggregate } from './food-category-max-aggregate.output';

@ObjectType()
export class FoodCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    parentCategoryId?: string;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;

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
