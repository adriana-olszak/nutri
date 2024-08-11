import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Type } from 'class-transformer';
import { BrandedFoodOrderByWithRelationInput } from './branded-food-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandedFoodCountAggregateInput } from './branded-food-count-aggregate.input';
import { BrandedFoodAvgAggregateInput } from './branded-food-avg-aggregate.input';
import { BrandedFoodSumAggregateInput } from './branded-food-sum-aggregate.input';
import { BrandedFoodMinAggregateInput } from './branded-food-min-aggregate.input';
import { BrandedFoodMaxAggregateInput } from './branded-food-max-aggregate.input';

@ArgsType()
export class BrandedFoodAggregateArgs {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;

    @Field(() => [BrandedFoodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BrandedFoodOrderByWithRelationInput>;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BrandedFoodCountAggregateInput, {nullable:true})
    _count?: BrandedFoodCountAggregateInput;

    @Field(() => BrandedFoodAvgAggregateInput, {nullable:true})
    _avg?: BrandedFoodAvgAggregateInput;

    @Field(() => BrandedFoodSumAggregateInput, {nullable:true})
    _sum?: BrandedFoodSumAggregateInput;

    @Field(() => BrandedFoodMinAggregateInput, {nullable:true})
    _min?: BrandedFoodMinAggregateInput;

    @Field(() => BrandedFoodMaxAggregateInput, {nullable:true})
    _max?: BrandedFoodMaxAggregateInput;
}
