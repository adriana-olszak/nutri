import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';
import { RecipePartCreateNestedOneWithoutIngredientsInput } from '../recipe-part/recipe-part-create-nested-one-without-ingredients.input';
import { FoodCreateNestedOneWithoutRecipeIngredientInput } from '../food/food-create-nested-one-without-recipe-ingredient.input';

@InputType()
export class RecipeIngredientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => RecipeCreateNestedOneWithoutIngredientsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutIngredientsInput;

    @Field(() => RecipePartCreateNestedOneWithoutIngredientsInput, {nullable:true})
    part?: RecipePartCreateNestedOneWithoutIngredientsInput;

    @Field(() => FoodCreateNestedOneWithoutRecipeIngredientInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutRecipeIngredientInput;
}
