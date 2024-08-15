import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsUpdateWithoutRecipeInput } from './recipe-instructions-update-without-recipe.input';

@InputType()
export class RecipeInstructionsUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeInstructionsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>;

    @Field(() => RecipeInstructionsUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionsUpdateWithoutRecipeInput)
    data!: RecipeInstructionsUpdateWithoutRecipeInput;
}
