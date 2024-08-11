import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipePartArgs {

    @Field(() => RecipePartWhereInput, {nullable:true})
    @Type(() => RecipePartWhereInput)
    where?: RecipePartWhereInput;
}
