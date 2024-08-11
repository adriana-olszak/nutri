import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipePartWhereInput } from './recipe-part-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';

@InputType()
export class RecipePartWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [RecipePartWhereInput], {nullable:true})
    AND?: Array<RecipePartWhereInput>;

    @Field(() => [RecipePartWhereInput], {nullable:true})
    OR?: Array<RecipePartWhereInput>;

    @Field(() => [RecipePartWhereInput], {nullable:true})
    NOT?: Array<RecipePartWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    ingredients?: RecipeIngredientListRelationFilter;
}
