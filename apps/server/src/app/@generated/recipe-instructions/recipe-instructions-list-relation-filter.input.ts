import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionsWhereInput } from './recipe-instructions-where.input';

@InputType()
export class RecipeInstructionsListRelationFilter {

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    every?: RecipeInstructionsWhereInput;

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    some?: RecipeInstructionsWhereInput;

    @Field(() => RecipeInstructionsWhereInput, {nullable:true})
    none?: RecipeInstructionsWhereInput;
}
