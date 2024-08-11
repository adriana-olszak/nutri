import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeImageWhereInput } from './recipe-image-where.input';

@InputType()
export class RecipeImageListRelationFilter {

    @Field(() => RecipeImageWhereInput, {nullable:true})
    every?: RecipeImageWhereInput;

    @Field(() => RecipeImageWhereInput, {nullable:true})
    some?: RecipeImageWhereInput;

    @Field(() => RecipeImageWhereInput, {nullable:true})
    none?: RecipeImageWhereInput;
}
