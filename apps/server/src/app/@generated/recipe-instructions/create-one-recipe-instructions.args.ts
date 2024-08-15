import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsCreateInput } from './recipe-instructions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsCreateInput, {nullable:false})
    @Type(() => RecipeInstructionsCreateInput)
    data!: RecipeInstructionsCreateInput;
}
