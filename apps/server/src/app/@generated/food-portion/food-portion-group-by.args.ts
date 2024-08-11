import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodPortionWhereInput } from './food-portion-where.input';
import { Type } from 'class-transformer';
import { FoodPortionOrderByWithAggregationInput } from './food-portion-order-by-with-aggregation.input';
import { FoodPortionScalarFieldEnum } from './food-portion-scalar-field.enum';
import { FoodPortionScalarWhereWithAggregatesInput } from './food-portion-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FoodPortionCountAggregateInput } from './food-portion-count-aggregate.input';
import { FoodPortionAvgAggregateInput } from './food-portion-avg-aggregate.input';
import { FoodPortionSumAggregateInput } from './food-portion-sum-aggregate.input';
import { FoodPortionMinAggregateInput } from './food-portion-min-aggregate.input';
import { FoodPortionMaxAggregateInput } from './food-portion-max-aggregate.input';

@ArgsType()
export class FoodPortionGroupByArgs {

    @Field(() => FoodPortionWhereInput, {nullable:true})
    @Type(() => FoodPortionWhereInput)
    where?: FoodPortionWhereInput;

    @Field(() => [FoodPortionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FoodPortionOrderByWithAggregationInput>;

    @Field(() => [FoodPortionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FoodPortionScalarFieldEnum>;

    @Field(() => FoodPortionScalarWhereWithAggregatesInput, {nullable:true})
    having?: FoodPortionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FoodPortionCountAggregateInput, {nullable:true})
    _count?: FoodPortionCountAggregateInput;

    @Field(() => FoodPortionAvgAggregateInput, {nullable:true})
    _avg?: FoodPortionAvgAggregateInput;

    @Field(() => FoodPortionSumAggregateInput, {nullable:true})
    _sum?: FoodPortionSumAggregateInput;

    @Field(() => FoodPortionMinAggregateInput, {nullable:true})
    _min?: FoodPortionMinAggregateInput;

    @Field(() => FoodPortionMaxAggregateInput, {nullable:true})
    _max?: FoodPortionMaxAggregateInput;
}
