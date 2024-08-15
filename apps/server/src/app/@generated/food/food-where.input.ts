import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FoodNutrientListRelationFilter } from '../food-nutrient/food-nutrient-list-relation-filter.input';
import { FoodPortionListRelationFilter } from '../food-portion/food-portion-list-relation-filter.input';
import { BrandedFoodNullableRelationFilter } from '../branded-food/branded-food-nullable-relation-filter.input';
import { FoodCategoryOnFoodListRelationFilter } from '../food-category-on-food/food-category-on-food-list-relation-filter.input';
import { FoodSearchVectorListRelationFilter } from '../food-search-vector/food-search-vector-list-relation-filter.input';
import { ImportInfoNullableRelationFilter } from '../import-info/import-info-nullable-relation-filter.input';
import { RecipeIngredientListRelationFilter } from '../recipe-ingredient/recipe-ingredient-list-relation-filter.input';

@InputType()
export class FoodWhereInput {

    @Field(() => [FoodWhereInput], {nullable:true})
    AND?: Array<FoodWhereInput>;

    @Field(() => [FoodWhereInput], {nullable:true})
    OR?: Array<FoodWhereInput>;

    @Field(() => [FoodWhereInput], {nullable:true})
    NOT?: Array<FoodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    scientificName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    importInfoId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FoodNutrientListRelationFilter, {nullable:true})
    nutrients?: FoodNutrientListRelationFilter;

    @Field(() => FoodPortionListRelationFilter, {nullable:true})
    portions?: FoodPortionListRelationFilter;

    @Field(() => BrandedFoodNullableRelationFilter, {nullable:true})
    brandedFood?: BrandedFoodNullableRelationFilter;

    @Field(() => FoodCategoryOnFoodListRelationFilter, {nullable:true})
    categories?: FoodCategoryOnFoodListRelationFilter;

    @Field(() => FoodSearchVectorListRelationFilter, {nullable:true})
    searchVectors?: FoodSearchVectorListRelationFilter;

    @Field(() => ImportInfoNullableRelationFilter, {nullable:true})
    importInfo?: ImportInfoNullableRelationFilter;

    @Field(() => RecipeIngredientListRelationFilter, {nullable:true})
    RecipeIngredient?: RecipeIngredientListRelationFilter;
}
