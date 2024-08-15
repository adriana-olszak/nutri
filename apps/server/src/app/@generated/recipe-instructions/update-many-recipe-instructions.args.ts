import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionsUpdateManyMutationInput } from './recipe-instructions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsWhereInput } from './recipe-instructions-where.input';

@ArgsType()
export class UpdateManyRecipeInstructionsArgs {

    @Field(() => RecipeInstructionsUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeInstructionsUpdateManyMutationInput)
    data!: RecipeInstructionsUpdateManyMutationInput;

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    @Type(() => RecipeInstructionsWhereInput)
    where?: RecipeInstructionsWhereInput;
}
