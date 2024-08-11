import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';

@InputType()
export class RecipePartListRelationFilter {

    @Field(() => RecipePartWhereInput, {nullable:true})
    every?: RecipePartWhereInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    some?: RecipePartWhereInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    none?: RecipePartWhereInput;
}
