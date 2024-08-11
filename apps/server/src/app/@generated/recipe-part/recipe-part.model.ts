import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { RecipePartCount } from './recipe-part-count.output';

@ObjectType()
export class RecipePart {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;

    @Field(() => [RecipeIngredient], {nullable:true})
    ingredients?: Array<RecipeIngredient>;

    @Field(() => RecipePartCount, {nullable:false})
    _count?: RecipePartCount;
}
