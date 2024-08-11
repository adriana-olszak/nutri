import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeImageWhereInput } from './recipe-image-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';

@InputType()
export class RecipeImageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipeImageWhereInput], {nullable:true})
    AND?: Array<RecipeImageWhereInput>;

    @Field(() => [RecipeImageWhereInput], {nullable:true})
    OR?: Array<RecipeImageWhereInput>;

    @Field(() => [RecipeImageWhereInput], {nullable:true})
    NOT?: Array<RecipeImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    altText?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;
}
