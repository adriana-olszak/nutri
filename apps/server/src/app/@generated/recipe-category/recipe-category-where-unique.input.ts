import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCategoryWhereInput } from './recipe-category-where.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class RecipeCategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [RecipeCategoryWhereInput], {nullable:true})
    AND?: Array<RecipeCategoryWhereInput>;

    @Field(() => [RecipeCategoryWhereInput], {nullable:true})
    OR?: Array<RecipeCategoryWhereInput>;

    @Field(() => [RecipeCategoryWhereInput], {nullable:true})
    NOT?: Array<RecipeCategoryWhereInput>;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
