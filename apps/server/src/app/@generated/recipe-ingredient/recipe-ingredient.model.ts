import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';
import { RecipePart } from '../recipe-part/recipe-part.model';
import { Food } from '../food/food.model';

@ObjectType()
export class RecipeIngredient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:true})
    partId!: string | null;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    unit!: string;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;

    @Field(() => RecipePart, {nullable:true})
    part?: RecipePart | null;

    @Field(() => Food, {nullable:false})
    food?: Food;
}
