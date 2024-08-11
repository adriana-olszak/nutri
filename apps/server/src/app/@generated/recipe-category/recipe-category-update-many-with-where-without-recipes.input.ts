import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCategoryScalarWhereInput } from './recipe-category-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeCategoryUpdateManyMutationInput } from './recipe-category-update-many-mutation.input';

@InputType()
export class RecipeCategoryUpdateManyWithWhereWithoutRecipesInput {

    @Field(() => RecipeCategoryScalarWhereInput, {nullable:false})
    @Type(() => RecipeCategoryScalarWhereInput)
    where!: RecipeCategoryScalarWhereInput;

    @Field(() => RecipeCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeCategoryUpdateManyMutationInput)
    data!: RecipeCategoryUpdateManyMutationInput;
}
