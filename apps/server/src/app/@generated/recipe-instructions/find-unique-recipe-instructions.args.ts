import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>;
}
