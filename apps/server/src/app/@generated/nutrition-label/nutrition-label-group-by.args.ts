import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { Type } from 'class-transformer';
import { NutritionLabelOrderByWithAggregationInput } from './nutrition-label-order-by-with-aggregation.input';
import { NutritionLabelScalarFieldEnum } from './nutrition-label-scalar-field.enum';
import { NutritionLabelScalarWhereWithAggregatesInput } from './nutrition-label-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NutritionLabelCountAggregateInput } from './nutrition-label-count-aggregate.input';
import { NutritionLabelAvgAggregateInput } from './nutrition-label-avg-aggregate.input';
import { NutritionLabelSumAggregateInput } from './nutrition-label-sum-aggregate.input';
import { NutritionLabelMinAggregateInput } from './nutrition-label-min-aggregate.input';
import { NutritionLabelMaxAggregateInput } from './nutrition-label-max-aggregate.input';

@ArgsType()
export class NutritionLabelGroupByArgs {

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;

    @Field(() => [NutritionLabelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NutritionLabelOrderByWithAggregationInput>;

    @Field(() => [NutritionLabelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NutritionLabelScalarFieldEnum>;

    @Field(() => NutritionLabelScalarWhereWithAggregatesInput, {nullable:true})
    having?: NutritionLabelScalarWhereWithAggregatesInput;

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
