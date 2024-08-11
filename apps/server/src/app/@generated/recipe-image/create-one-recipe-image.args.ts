import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeImageCreateInput } from './recipe-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeImageArgs {

    @Field(() => RecipeImageCreateInput, {nullable:false})
    @Type(() => RecipeImageCreateInput)
    data!: RecipeImageCreateInput;
}
