import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartUpdateManyMutationInput } from './recipe-part-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipePartWhereInput } from './recipe-part-where.input';

@ArgsType()
export class UpdateManyRecipePartArgs {

    @Field(() => RecipePartUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipePartUpdateManyMutationInput)
    data!: RecipePartUpdateManyMutationInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;
}
