import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeCategoryWhereInput } from './recipe-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipeCategoryArgs {

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    @Type(() => RecipeCategoryWhereInput)
    where?: RecipeCategoryWhereInput;
}
