import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryWhereInput } from './recipe-category-where.input';
import { Type } from 'class-transformer';
import { RecipeCategoryOrderByWithAggregationInput } from './recipe-category-order-by-with-aggregation.input';
import { RecipeCategoryScalarFieldEnum } from './recipe-category-scalar-field.enum';
import { RecipeCategoryScalarWhereWithAggregatesInput } from './recipe-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeCategoryCountAggregateInput } from './recipe-category-count-aggregate.input';
import { RecipeCategoryMinAggregateInput } from './recipe-category-min-aggregate.input';
import { RecipeCategoryMaxAggregateInput } from './recipe-category-max-aggregate.input';

@ArgsType()
export class RecipeCategoryGroupByArgs {

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    @Type(() => RecipeCategoryWhereInput)
    where?: RecipeCategoryWhereInput;

    @Field(() => [RecipeCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeCategoryOrderByWithAggregationInput>;

    @Field(() => [RecipeCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RecipeCategoryScalarFieldEnum>;

    @Field(() => RecipeCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeCategoryCountAggregateInput, {nullable:true})
    _count?: RecipeCategoryCountAggregateInput;

    @Field(() => RecipeCategoryMinAggregateInput, {nullable:true})
    _min?: RecipeCategoryMinAggregateInput;

    @Field(() => RecipeCategoryMaxAggregateInput, {nullable:true})
    _max?: RecipeCategoryMaxAggregateInput;
}
