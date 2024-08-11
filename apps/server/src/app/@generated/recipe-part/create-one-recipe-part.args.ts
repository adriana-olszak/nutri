import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipePartCreateInput } from './recipe-part-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipePartArgs {

    @Field(() => RecipePartCreateInput, {nullable:false})
    @Type(() => RecipePartCreateInput)
    data!: RecipePartCreateInput;
}
