import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientCreateManyPartInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:true})
    quantityText?: string;

    @Field(() => Float, {nullable:true})
    minQuantity?: number;

    @Field(() => Float, {nullable:true})
    maxQuantity?: number;

    @Field(() => String, {nullable:false})
    unit!: string;

    @Field(() => String, {nullable:true})
    unitText?: string;

    @Field(() => String, {nullable:true})
    ingredientText?: string;

    @Field(() => String, {nullable:true})
    extraInfo?: string;
}
