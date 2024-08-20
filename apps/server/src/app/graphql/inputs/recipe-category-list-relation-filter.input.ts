import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCategoryWhereInput } from './recipe-category-where.input';

@InputType()
export class RecipeCategoryListRelationFilter {

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    every?: RecipeCategoryWhereInput;

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    some?: RecipeCategoryWhereInput;

    @Field(() => RecipeCategoryWhereInput, {nullable:true})
    none?: RecipeCategoryWhereInput;
}
