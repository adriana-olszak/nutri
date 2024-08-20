import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RecipeIngredient } from './recipe-ingredient.model';

@ObjectType()
export class RecipePart {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => [RecipeIngredient], {nullable:true})
    ingredients?: Array<RecipeIngredient>;
}
