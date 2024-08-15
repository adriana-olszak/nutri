import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsUpdateInput } from './recipe-instructions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';

@ArgsType()
export class UpdateOneRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsUpdateInput, {nullable:false})
    @Type(() => RecipeInstructionsUpdateInput)
    data!: RecipeInstructionsUpdateInput;

    @Field(() => RecipeInstructionsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>;
}
