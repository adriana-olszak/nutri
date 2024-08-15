import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsWhereInput } from './recipe-instructions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    @Type(() => RecipeInstructionsWhereInput)
    where?: RecipeInstructionsWhereInput;
}
