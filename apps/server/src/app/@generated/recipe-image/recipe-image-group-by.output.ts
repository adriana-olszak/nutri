import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeImageCountAggregate } from './recipe-image-count-aggregate.output';
import { RecipeImageAvgAggregate } from './recipe-image-avg-aggregate.output';
import { RecipeImageSumAggregate } from './recipe-image-sum-aggregate.output';
import { RecipeImageMinAggregate } from './recipe-image-min-aggregate.output';
import { RecipeImageMaxAggregate } from './recipe-image-max-aggregate.output';

@ObjectType()
export class RecipeImageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    altText?: string;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => RecipeImageCountAggregate, {nullable:true})
    _count?: RecipeImageCountAggregate;

    @Field(() => RecipeImageAvgAggregate, {nullable:true})
    _avg?: RecipeImageAvgAggregate;

    @Field(() => RecipeImageSumAggregate, {nullable:true})
    _sum?: RecipeImageSumAggregate;

    @Field(() => RecipeImageMinAggregate, {nullable:true})
    _min?: RecipeImageMinAggregate;

    @Field(() => RecipeImageMaxAggregate, {nullable:true})
    _max?: RecipeImageMaxAggregate;
}
