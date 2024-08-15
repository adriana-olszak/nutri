import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeInstructionsType } from '../prisma/recipe-instructions-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeInstructionsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    recipeId?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => RecipeInstructionsType, {nullable:true})
    type?: keyof typeof RecipeInstructionsType;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    listIndex?: number;
}
