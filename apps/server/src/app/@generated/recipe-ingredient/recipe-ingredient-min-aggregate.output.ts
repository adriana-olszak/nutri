import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    recipeId?: string;

    @Field(() => String, {nullable:true})
    partId?: string;

    @Field(() => String, {nullable:true})
    foodId?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    quantityText?: string;

    @Field(() => Float, {nullable:true})
    minQuantity?: number;

    @Field(() => Float, {nullable:true})
    maxQuantity?: number;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => String, {nullable:true})
    unitText?: string;

    @Field(() => String, {nullable:true})
    ingredientText?: string;

    @Field(() => String, {nullable:true})
    extraInfo?: string;
}
