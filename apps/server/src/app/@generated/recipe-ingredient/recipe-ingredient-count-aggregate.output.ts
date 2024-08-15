import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    partId!: number;

    @Field(() => Int, {nullable:false})
    foodId!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    quantityText!: number;

    @Field(() => Int, {nullable:false})
    minQuantity!: number;

    @Field(() => Int, {nullable:false})
    maxQuantity!: number;

    @Field(() => Int, {nullable:false})
    unit!: number;

    @Field(() => Int, {nullable:false})
    unitText!: number;

    @Field(() => Int, {nullable:false})
    ingredientText!: number;

    @Field(() => Int, {nullable:false})
    extraInfo!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
