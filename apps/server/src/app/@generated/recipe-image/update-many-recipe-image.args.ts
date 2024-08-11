import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageUpdateManyMutationInput } from './recipe-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeImageWhereInput } from './recipe-image-where.input';

@ArgsType()
export class UpdateManyRecipeImageArgs {

    @Field(() => RecipeImageUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeImageUpdateManyMutationInput)
    data!: RecipeImageUpdateManyMutationInput;

    @Field(() => RecipeImageWhereInput, {nullable:true})
    @Type(() => RecipeImageWhereInput)
    where?: RecipeImageWhereInput;
}
