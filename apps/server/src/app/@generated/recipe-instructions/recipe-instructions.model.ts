import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RecipeInstructionsType } from '../prisma/recipe-instructions-type.enum';
import { Int } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';

@ObjectType()
export class RecipeInstructions {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => RecipeInstructionsType, {nullable:false})
    type!: keyof typeof RecipeInstructionsType;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:true})
    listIndex!: number | null;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;
}
