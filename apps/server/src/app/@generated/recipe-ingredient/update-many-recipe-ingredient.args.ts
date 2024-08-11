import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientUpdateManyMutationInput } from './recipe-ingredient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';

@ArgsType()
export class UpdateManyRecipeIngredientArgs {

    @Field(() => RecipeIngredientUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateManyMutationInput)
    data!: RecipeIngredientUpdateManyMutationInput;

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;
}
