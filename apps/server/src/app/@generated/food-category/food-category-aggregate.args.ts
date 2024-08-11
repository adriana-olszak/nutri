import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Type } from 'class-transformer';
import { FoodCategoryOrderByWithRelationInput } from './food-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FoodCategoryCountAggregateInput } from './food-category-count-aggregate.input';
import { FoodCategoryAvgAggregateInput } from './food-category-avg-aggregate.input';
import { FoodCategorySumAggregateInput } from './food-category-sum-aggregate.input';
import { FoodCategoryMinAggregateInput } from './food-category-min-aggregate.input';
import { FoodCategoryMaxAggregateInput } from './food-category-max-aggregate.input';

@ArgsType()
export class FoodCategoryAggregateArgs {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;

    @Field(() => [FoodCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FoodCategoryOrderByWithRelationInput>;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodCategoryCountAggregateInput, {nullable:true})
    _count?: FoodCategoryCountAggregateInput;

    @Field(() => FoodCategoryAvgAggregateInput, {nullable:true})
    _avg?: FoodCategoryAvgAggregateInput;

    @Field(() => FoodCategorySumAggregateInput, {nullable:true})
    _sum?: FoodCategorySumAggregateInput;

    @Field(() => FoodCategoryMinAggregateInput, {nullable:true})
    _min?: FoodCategoryMinAggregateInput;

    @Field(() => FoodCategoryMaxAggregateInput, {nullable:true})
    _max?: FoodCategoryMaxAggregateInput;
}
