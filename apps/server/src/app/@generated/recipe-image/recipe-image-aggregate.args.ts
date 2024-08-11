import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageWhereInput } from './recipe-image-where.input';
import { Type } from 'class-transformer';
import { RecipeImageOrderByWithRelationInput } from './recipe-image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecipeImageWhereUniqueInput } from './recipe-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeImageCountAggregateInput } from './recipe-image-count-aggregate.input';
import { RecipeImageAvgAggregateInput } from './recipe-image-avg-aggregate.input';
import { RecipeImageSumAggregateInput } from './recipe-image-sum-aggregate.input';
import { RecipeImageMinAggregateInput } from './recipe-image-min-aggregate.input';
import { RecipeImageMaxAggregateInput } from './recipe-image-max-aggregate.input';

@ArgsType()
export class RecipeImageAggregateArgs {

    @Field(() => RecipeImageWhereInput, {nullable:true})
    @Type(() => RecipeImageWhereInput)
    where?: RecipeImageWhereInput;

    @Field(() => [RecipeImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeImageOrderByWithRelationInput>;

    @Field(() => RecipeImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeImageWhereUniqueInput, 'id'>;

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
