import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';

@InputType()
export class RecipePartNullableRelationFilter {

    @Field(() => RecipePartWhereInput, {nullable:true})
    is?: RecipePartWhereInput;

    @Field(() => RecipePartWhereInput, {nullable:true})
    isNot?: RecipePartWhereInput;
}
