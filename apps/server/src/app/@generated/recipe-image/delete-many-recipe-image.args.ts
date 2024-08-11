import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageWhereInput } from './recipe-image-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipeImageArgs {

    @Field(() => RecipeImageWhereInput, {nullable:true})
    @Type(() => RecipeImageWhereInput)
    where?: RecipeImageWhereInput;
}
