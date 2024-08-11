import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FoodDataSource } from '../prisma/food-data-source.enum';
import { Food } from '../food/food.model';
import { FoodCategory } from '../food-category/food-category.model';
import { BrandedFood } from '../branded-food/branded-food.model';
import { Nutrient } from '../nutrient/nutrient.model';
import { FoodNutrient } from '../food-nutrient/food-nutrient.model';
import { FoodPortion } from '../food-portion/food-portion.model';
import { MeasureUnit } from '../measure-unit/measure-unit.model';
import { ImportInfoCount } from './import-info-count.output';

@ObjectType()
export class ImportInfo {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sourceVersion!: string;

    @Field(() => Date, {nullable:false})
    importDate!: Date;

    @Field(() => FoodDataSource, {nullable:false})
    dataSource!: keyof typeof FoodDataSource;

    @Field(() => [Food], {nullable:true})
    foods?: Array<Food>;

    @Field(() => [FoodCategory], {nullable:true})
    foodCategories?: Array<FoodCategory>;

    @Field(() => [BrandedFood], {nullable:true})
    brandedFoods?: Array<BrandedFood>;

    @Field(() => [Nutrient], {nullable:true})
    nutrients?: Array<Nutrient>;

    @Field(() => [FoodNutrient], {nullable:true})
    foodNutrients?: Array<FoodNutrient>;

    @Field(() => [FoodPortion], {nullable:true})
    foodPortions?: Array<FoodPortion>;

    @Field(() => [MeasureUnit], {nullable:true})
    measureUnits?: Array<MeasureUnit>;

    @Field(() => ImportInfoCount, {nullable:false})
    _count?: ImportInfoCount;
}
