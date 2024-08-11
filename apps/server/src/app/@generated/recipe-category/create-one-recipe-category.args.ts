import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryCreateInput } from './recipe-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeCategoryArgs {

    @Field(() => RecipeCategoryCreateInput, {nullable:false})
    @Type(() => RecipeCategoryCreateInput)
    data!: RecipeCategoryCreateInput;
}
