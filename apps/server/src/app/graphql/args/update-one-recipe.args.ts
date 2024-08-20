import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeUpdateInput } from '../inputs/recipe-update.input';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateOneRecipeArgs {

    @Field(() => RecipeUpdateInput, {nullable:false})
    @Type(() => RecipeUpdateInput)
    data!: RecipeUpdateInput;

    @Field(() => String, {nullable:false})
    id!: string
}
