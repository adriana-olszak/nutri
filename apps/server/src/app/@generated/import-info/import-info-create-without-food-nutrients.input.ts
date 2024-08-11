import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodDataSource } from '../prisma/food-data-source.enum';
import { FoodCreateNestedManyWithoutImportInfoInput } from '../food/food-create-nested-many-without-import-info.input';
import { FoodCategoryCreateNestedManyWithoutImportInfoInput } from '../food-category/food-category-create-nested-many-without-import-info.input';
import { BrandedFoodCreateNestedManyWithoutImportInfoInput } from '../branded-food/branded-food-create-nested-many-without-import-info.input';
import { NutrientCreateNestedManyWithoutImportInfoInput } from '../nutrient/nutrient-create-nested-many-without-import-info.input';
import { FoodPortionCreateNestedManyWithoutImportInfoInput } from '../food-portion/food-portion-create-nested-many-without-import-info.input';
import { MeasureUnitCreateNestedManyWithoutImportInfoInput } from '../measure-unit/measure-unit-create-nested-many-without-import-info.input';

@InputType()
export class ImportInfoCreateWithoutFoodNutrientsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    sourceVersion!: string;

    @Field(() => Date, {nullable:false})
    importDate!: Date | string;

    @Field(() => FoodDataSource, {nullable:false})
    dataSource!: keyof typeof FoodDataSource;

    @Field(() => FoodCreateNestedManyWithoutImportInfoInput, {nullable:true})
    foods?: FoodCreateNestedManyWithoutImportInfoInput;

    @Field(() => FoodCategoryCreateNestedManyWithoutImportInfoInput, {nullable:true})
    foodCategories?: FoodCategoryCreateNestedManyWithoutImportInfoInput;

    @Field(() => BrandedFoodCreateNestedManyWithoutImportInfoInput, {nullable:true})
    brandedFoods?: BrandedFoodCreateNestedManyWithoutImportInfoInput;

    @Field(() => NutrientCreateNestedManyWithoutImportInfoInput, {nullable:true})
    nutrients?: NutrientCreateNestedManyWithoutImportInfoInput;

    @Field(() => FoodPortionCreateNestedManyWithoutImportInfoInput, {nullable:true})
    foodPortions?: FoodPortionCreateNestedManyWithoutImportInfoInput;

    @Field(() => MeasureUnitCreateNestedManyWithoutImportInfoInput, {nullable:true})
    measureUnits?: MeasureUnitCreateNestedManyWithoutImportInfoInput;
}
