import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { Type } from 'class-transformer';
import { RecipePartOrderByWithAggregationInput } from './recipe-part-order-by-with-aggregation.input';
import { RecipePartScalarFieldEnum } from './recipe-part-scalar-field.enum';
import { RecipePartScalarWhereWithAggregatesInput } from './recipe-part-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipePartCountAggregateInput } from './recipe-part-count-aggregate.input';
import { RecipePartMinAggregateInput } from './recipe-part-min-aggregate.input';
import { RecipePartMaxAggregateInput } from './recipe-part-max-aggregate.input';

@ArgsType()
export class RecipePartGroupByArgs {

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;

    @Field(() => [RecipePartOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipePartOrderByWithAggregationInput>;

    @Field(() => [RecipePartScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RecipePartScalarFieldEnum>;

    @Field(() => RecipePartScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipePartScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipePartCountAggregateInput, {nullable:true})
    _count?: RecipePartCountAggregateInput;

    @Field(() => RecipePartMinAggregateInput, {nullable:true})
    _min?: RecipePartMinAggregateInput;

    @Field(() => RecipePartMaxAggregateInput, {nullable:true})
    _max?: RecipePartMaxAggregateInput;
}
