import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsScalarWhereInput } from './recipe-instructions-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeInstructionsUpdateManyMutationInput } from './recipe-instructions-update-many-mutation.input';

@InputType()
export class RecipeInstructionsUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeInstructionsScalarWhereInput, {nullable:false})
    @Type(() => RecipeInstructionsScalarWhereInput)
    where!: RecipeInstructionsScalarWhereInput;

    @Field(() => RecipeInstructionsUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeInstructionsUpdateManyMutationInput)
    data!: RecipeInstructionsUpdateManyMutationInput;
}
