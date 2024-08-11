import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RecipeIngredientCountAggregate } from './recipe-ingredient-count-aggregate.output';
import { RecipeIngredientAvgAggregate } from './recipe-ingredient-avg-aggregate.output';
import { RecipeIngredientSumAggregate } from './recipe-ingredient-sum-aggregate.output';
import { RecipeIngredientMinAggregate } from './recipe-ingredient-min-aggregate.output';
import { RecipeIngredientMaxAggregate } from './recipe-ingredient-max-aggregate.output';

@ObjectType()
export class RecipeIngredientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:true})
    partId?: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    unit!: string;

    @Field(() => RecipeIngredientCountAggregate, {nullable:true})
    _count?: RecipeIngredientCountAggregate;

    @Field(() => RecipeIngredientAvgAggregate, {nullable:true})
    _avg?: RecipeIngredientAvgAggregate;

    @Field(() => RecipeIngredientSumAggregate, {nullable:true})
    _sum?: RecipeIngredientSumAggregate;

    @Field(() => RecipeIngredientMinAggregate, {nullable:true})
    _min?: RecipeIngredientMinAggregate;

    @Field(() => RecipeIngredientMaxAggregate, {nullable:true})
    _max?: RecipeIngredientMaxAggregate;
}
