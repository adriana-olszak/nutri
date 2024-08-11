import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';
import { FoodCreateNestedOneWithoutRecipeIngredientInput } from '../food/food-create-nested-one-without-recipe-ingredient.input';

@InputType()
export class RecipeIngredientCreateWithoutPartInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    unit!: string;

    @Field(() => RecipeCreateNestedOneWithoutIngredientsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutIngredientsInput;

    @Field(() => FoodCreateNestedOneWithoutRecipeIngredientInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutRecipeIngredientInput;
}
