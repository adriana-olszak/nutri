import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumFoodDataSourceFilter } from '../prisma/enum-food-data-source-filter.input';
import { FoodListRelationFilter } from '../food/food-list-relation-filter.input';
import { FoodCategoryListRelationFilter } from '../food-category/food-category-list-relation-filter.input';
import { BrandedFoodListRelationFilter } from '../branded-food/branded-food-list-relation-filter.input';
import { NutrientListRelationFilter } from '../nutrient/nutrient-list-relation-filter.input';
import { FoodNutrientListRelationFilter } from '../food-nutrient/food-nutrient-list-relation-filter.input';
import { FoodPortionListRelationFilter } from '../food-portion/food-portion-list-relation-filter.input';
import { MeasureUnitListRelationFilter } from '../measure-unit/measure-unit-list-relation-filter.input';

@InputType()
export class ImportInfoWhereInput {

    @Field(() => [ImportInfoWhereInput], {nullable:true})
    AND?: Array<ImportInfoWhereInput>;

    @Field(() => [ImportInfoWhereInput], {nullable:true})
    OR?: Array<ImportInfoWhereInput>;

    @Field(() => [ImportInfoWhereInput], {nullable:true})
    NOT?: Array<ImportInfoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceVersion?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    importDate?: DateTimeFilter;

    @Field(() => EnumFoodDataSourceFilter, {nullable:true})
    dataSource?: EnumFoodDataSourceFilter;

    @Field(() => FoodListRelationFilter, {nullable:true})
    foods?: FoodListRelationFilter;

    @Field(() => FoodCategoryListRelationFilter, {nullable:true})
    foodCategories?: FoodCategoryListRelationFilter;

    @Field(() => BrandedFoodListRelationFilter, {nullable:true})
    brandedFoods?: BrandedFoodListRelationFilter;

    @Field(() => NutrientListRelationFilter, {nullable:true})
    nutrients?: NutrientListRelationFilter;

    @Field(() => FoodNutrientListRelationFilter, {nullable:true})
    foodNutrients?: FoodNutrientListRelationFilter;

    @Field(() => FoodPortionListRelationFilter, {nullable:true})
    foodPortions?: FoodPortionListRelationFilter;

    @Field(() => MeasureUnitListRelationFilter, {nullable:true})
    measureUnits?: MeasureUnitListRelationFilter;
}
