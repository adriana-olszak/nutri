import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RecipePartCreateNestedOneWithoutIngredientsInput } from '../recipe-part/recipe-part-create-nested-one-without-ingredients.input';
import { FoodCreateNestedOneWithoutRecipeIngredientInput } from '../food/food-create-nested-one-without-recipe-ingredient.input';

@InputType()
export class RecipeIngredientCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    unit!: string;

    @Field(() => RecipePartCreateNestedOneWithoutIngredientsInput, {nullable:true})
    part?: RecipePartCreateNestedOneWithoutIngredientsInput;

    @Field(() => FoodCreateNestedOneWithoutRecipeIngredientInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutRecipeIngredientInput;
}
