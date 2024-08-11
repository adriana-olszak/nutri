import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageWhereInput } from './recipe-image-where.input';
import { Type } from 'class-transformer';
import { RecipeImageOrderByWithAggregationInput } from './recipe-image-order-by-with-aggregation.input';
import { RecipeImageScalarFieldEnum } from './recipe-image-scalar-field.enum';
import { RecipeImageScalarWhereWithAggregatesInput } from './recipe-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeImageCountAggregateInput } from './recipe-image-count-aggregate.input';
import { RecipeImageAvgAggregateInput } from './recipe-image-avg-aggregate.input';
import { RecipeImageSumAggregateInput } from './recipe-image-sum-aggregate.input';
import { RecipeImageMinAggregateInput } from './recipe-image-min-aggregate.input';
import { RecipeImageMaxAggregateInput } from './recipe-image-max-aggregate.input';

@ArgsType()
export class RecipeImageGroupByArgs {

    @Field(() => RecipeImageWhereInput, {nullable:true})
    @Type(() => RecipeImageWhereInput)
    where?: RecipeImageWhereInput;

    @Field(() => [RecipeImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeImageOrderByWithAggregationInput>;

    @Field(() => [RecipeImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RecipeImageScalarFieldEnum>;

    @Field(() => RecipeImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeImageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeImageCountAggregateInput, {nullable:true})
    _count?: RecipeImageCountAggregateInput;

    @Field(() => RecipeImageAvgAggregateInput, {nullable:true})
    _avg?: RecipeImageAvgAggregateInput;

    @Field(() => RecipeImageSumAggregateInput, {nullable:true})
    _sum?: RecipeImageSumAggregateInput;

    @Field(() => RecipeImageMinAggregateInput, {nullable:true})
    _min?: RecipeImageMinAggregateInput;

    @Field(() => RecipeImageMaxAggregateInput, {nullable:true})
    _max?: RecipeImageMaxAggregateInput;
}
