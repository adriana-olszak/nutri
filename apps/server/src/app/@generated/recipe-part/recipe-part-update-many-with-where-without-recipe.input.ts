import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartScalarWhereInput } from './recipe-part-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipePartUpdateManyMutationInput } from './recipe-part-update-many-mutation.input';

@InputType()
export class RecipePartUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipePartScalarWhereInput, {nullable:false})
    @Type(() => RecipePartScalarWhereInput)
    where!: RecipePartScalarWhereInput;

    @Field(() => RecipePartUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipePartUpdateManyMutationInput)
    data!: RecipePartUpdateManyMutationInput;
}
