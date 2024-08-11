import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryUpdateManyMutationInput } from './recipe-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeCategoryWhereInput } from './recipe-category-where.input';

@ArgsType()
export class UpdateManyRecipeCategoryArgs {

    @Field(() => RecipeCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeCategoryUpdateManyMutationInput)
    data!: RecipeCategoryUpdateManyMutationInput;

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    @Type(() => RecipeCategoryWhereInput)
    where?: RecipeCategoryWhereInput;
}
