import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Type } from 'class-transformer';
import { BrandedFoodOrderByWithAggregationInput } from './branded-food-order-by-with-aggregation.input';
import { BrandedFoodScalarFieldEnum } from './branded-food-scalar-field.enum';
import { BrandedFoodScalarWhereWithAggregatesInput } from './branded-food-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BrandedFoodCountAggregateInput } from './branded-food-count-aggregate.input';
import { BrandedFoodAvgAggregateInput } from './branded-food-avg-aggregate.input';
import { BrandedFoodSumAggregateInput } from './branded-food-sum-aggregate.input';
import { BrandedFoodMinAggregateInput } from './branded-food-min-aggregate.input';
import { BrandedFoodMaxAggregateInput } from './branded-food-max-aggregate.input';

@ArgsType()
export class BrandedFoodGroupByArgs {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;

    @Field(() => [BrandedFoodOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BrandedFoodOrderByWithAggregationInput>;

    @Field(() => [BrandedFoodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BrandedFoodScalarFieldEnum>;

    @Field(() => BrandedFoodScalarWhereWithAggregatesInput, {nullable:true})
    having?: BrandedFoodScalarWhereWithAggregatesInput;

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
