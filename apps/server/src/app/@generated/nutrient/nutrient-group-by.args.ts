import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';
import { Type } from 'class-transformer';
import { NutrientOrderByWithAggregationInput } from './nutrient-order-by-with-aggregation.input';
import { NutrientScalarFieldEnum } from './nutrient-scalar-field.enum';
import { NutrientScalarWhereWithAggregatesInput } from './nutrient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NutrientCountAggregateInput } from './nutrient-count-aggregate.input';
import { NutrientMinAggregateInput } from './nutrient-min-aggregate.input';
import { NutrientMaxAggregateInput } from './nutrient-max-aggregate.input';

@ArgsType()
export class NutrientGroupByArgs {

    @Field(() => NutrientWhereInput, {nullable:true})
    @Type(() => NutrientWhereInput)
    where?: NutrientWhereInput;

    @Field(() => [NutrientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NutrientOrderByWithAggregationInput>;

    @Field(() => [NutrientScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NutrientScalarFieldEnum>;

    @Field(() => NutrientScalarWhereWithAggregatesInput, {nullable:true})
    having?: NutrientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NutrientCountAggregateInput, {nullable:true})
    _count?: NutrientCountAggregateInput;

    @Field(() => NutrientMinAggregateInput, {nullable:true})
    _min?: NutrientMinAggregateInput;

    @Field(() => NutrientMaxAggregateInput, {nullable:true})
    _max?: NutrientMaxAggregateInput;
}
