import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsUpdateWithoutRecipeInput } from './recipe-instructions-update-without-recipe.input';
import { RecipeInstructionsCreateWithoutRecipeInput } from './recipe-instructions-create-without-recipe.input';

@InputType()
export class RecipeInstructionsUpsertWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeInstructionsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>;

    @Field(() => RecipeInstructionsUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionsUpdateWithoutRecipeInput)
    update!: RecipeInstructionsUpdateWithoutRecipeInput;

    @Field(() => RecipeInstructionsCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionsCreateWithoutRecipeInput)
    create!: RecipeInstructionsCreateWithoutRecipeInput;
}
