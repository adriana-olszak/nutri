import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { Type } from 'class-transformer';
import { NutritionLabelOrderByWithRelationInput } from './nutrition-label-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionLabelCountAggregateInput } from './nutrition-label-count-aggregate.input';
import { NutritionLabelAvgAggregateInput } from './nutrition-label-avg-aggregate.input';
import { NutritionLabelSumAggregateInput } from './nutrition-label-sum-aggregate.input';
import { NutritionLabelMinAggregateInput } from './nutrition-label-min-aggregate.input';
import { NutritionLabelMaxAggregateInput } from './nutrition-label-max-aggregate.input';

@ArgsType()
export class NutritionLabelAggregateArgs {

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;

    @Field(() => [NutritionLabelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionLabelOrderByWithRelationInput>;

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NutritionLabelCountAggregateInput, {nullable:true})
    _count?: NutritionLabelCountAggregateInput;

    @Field(() => NutritionLabelAvgAggregateInput, {nullable:true})
    _avg?: NutritionLabelAvgAggregateInput;

    @Field(() => NutritionLabelSumAggregateInput, {nullable:true})
    _sum?: NutritionLabelSumAggregateInput;

    @Field(() => NutritionLabelMinAggregateInput, {nullable:true})
    _min?: NutritionLabelMinAggregateInput;

    @Field(() => NutritionLabelMaxAggregateInput, {nullable:true})
    _max?: NutritionLabelMaxAggregateInput;
}
