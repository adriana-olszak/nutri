import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipePartListRelationFilter } from '../recipe-part/recipe-part-list-relation-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';
import { RecipeCategoryListRelationFilter } from '../recipe-category/recipe-category-list-relation-filter.input';
import { RecipeImageListRelationFilter } from '../recipe-image/recipe-image-list-relation-filter.input';
import { SeasonListRelationFilter } from '../season/season-list-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class RecipeWhereInput {

    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourceId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourceUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cookingTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    prepTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    instructions?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    servingsText?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    servingsMin?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    servingsMax?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipePartListRelationFilter, {nullable:true})
    parts?: RecipePartListRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    ingredients?: RecipeIngredientListRelationFilter;

    @Field(() => RecipeCategoryListRelationFilter, {nullable:true})
    categories?: RecipeCategoryListRelationFilter;

    @Field(() => RecipeImageListRelationFilter, {nullable:true})
    images?: RecipeImageListRelationFilter;

    @Field(() => SeasonListRelationFilter, {nullable:true})
    seasons?: SeasonListRelationFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;
}
