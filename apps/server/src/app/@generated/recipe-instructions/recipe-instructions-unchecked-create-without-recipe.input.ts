import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsType } from '../prisma/recipe-instructions-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class RecipeInstructionsUncheckedCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => RecipeInstructionsType, {nullable:false})
    type!: keyof typeof RecipeInstructionsType;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:true})
    listIndex?: number;
}
