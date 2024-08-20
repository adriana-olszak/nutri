import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { RecipeCreateInput } from '../inputs/recipe-create.input';

@ArgsType()
export class CreateOneRecipeArgs {

    @Field(() => RecipeCreateInput, {nullable:false})
    @Type(() => RecipeCreateInput)
    data!: RecipeCreateInput;
}
