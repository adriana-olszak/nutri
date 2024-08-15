import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RecipeInstructionsWhereUniqueInput } from './recipe-instructions-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsCreateInput } from './recipe-instructions-create.input';
import { RecipeInstructionsUpdateInput } from './recipe-instructions-update.input';

@ArgsType()
export class UpsertOneRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionsWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeInstructionsWhereUniqueInput, 'id'>;

    @Field(() => RecipeInstructionsCreateInput, {nullable:false})
    @Type(() => RecipeInstructionsCreateInput)
    create!: RecipeInstructionsCreateInput;

    @Field(() => RecipeInstructionsUpdateInput, {nullable:false})
    @Type(() => RecipeInstructionsUpdateInput)
    update!: RecipeInstructionsUpdateInput;
}
