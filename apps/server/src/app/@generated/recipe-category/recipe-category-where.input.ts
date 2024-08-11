import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { RecipeListRelationFilter } from '../recipe/recipe-list-relation-filter.input';

@InputType()
export class RecipeCategoryWhereInput {

    @Field(() => [RecipeCategoryWhereInput], {nullable:true})
    AND?: Array<RecipeCategoryWhereInput>;

    @Field(() => [RecipeCategoryWhereInput], {nullable:true})
    OR?: Array<RecipeCategoryWhereInput>;

    @Field(() => [RecipeCategoryWhereInput], {nullable:true})
    NOT?: Array<RecipeCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: RecipeListRelationFilter;
}
