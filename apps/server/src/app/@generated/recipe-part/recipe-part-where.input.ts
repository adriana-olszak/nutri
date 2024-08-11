import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';

@InputType()
export class RecipePartWhereInput {

    @Field(() => [RecipePartWhereInput], {nullable:true})
    AND?: Array<RecipePartWhereInput>;

    @Field(() => [RecipePartWhereInput], {nullable:true})
    OR?: Array<RecipePartWhereInput>;

    @Field(() => [RecipePartWhereInput], {nullable:true})
    NOT?: Array<RecipePartWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    ingredients?: RecipeIngredientListRelationFilter;
}
