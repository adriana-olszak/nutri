import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeImageScalarWhereInput } from './recipe-image-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeImageUpdateManyMutationInput } from './recipe-image-update-many-mutation.input';

@InputType()
export class RecipeImageUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeImageScalarWhereInput, {nullable:false})
    @Type(() => RecipeImageScalarWhereInput)
    where!: RecipeImageScalarWhereInput;

    @Field(() => RecipeImageUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeImageUpdateManyMutationInput)
    data!: RecipeImageUpdateManyMutationInput;
}
