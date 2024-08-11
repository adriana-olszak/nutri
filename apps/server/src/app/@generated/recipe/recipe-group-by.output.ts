import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCountAggregate } from './recipe-count-aggregate.output';
import { RecipeAvgAggregate } from './recipe-avg-aggregate.output';
import { RecipeSumAggregate } from './recipe-sum-aggregate.output';
import { RecipeMinAggregate } from './recipe-min-aggregate.output';
import { RecipeMaxAggregate } from './recipe-max-aggregate.output';

@ObjectType()
export class RecipeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => String, {nullable:true})
    sourceUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    cookingTime?: string;

    @Field(() => String, {nullable:true})
    prepTime?: string;

    @Field(() => String, {nullable:true})
    instructions?: string;

    @Field(() => String, {nullable:true})
    servingsText?: string;

    @Field(() => Int, {nullable:true})
    servingsMin?: number;

    @Field(() => Int, {nullable:true})
    servingsMax?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RecipeCountAggregate, {nullable:true})
    _count?: RecipeCountAggregate;

    @Field(() => RecipeAvgAggregate, {nullable:true})
    _avg?: RecipeAvgAggregate;

    @Field(() => RecipeSumAggregate, {nullable:true})
    _sum?: RecipeSumAggregate;

    @Field(() => RecipeMinAggregate, {nullable:true})
    _min?: RecipeMinAggregate;

    @Field(() => RecipeMaxAggregate, {nullable:true})
    _max?: RecipeMaxAggregate;
}
