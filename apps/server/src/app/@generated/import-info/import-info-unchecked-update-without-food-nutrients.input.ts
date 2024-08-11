import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumFoodDataSourceFieldUpdateOperationsInput } from '../prisma/enum-food-data-source-field-update-operations.input';
import { FoodUncheckedUpdateManyWithoutImportInfoNestedInput } from '../food/food-unchecked-update-many-without-import-info-nested.input';
import { FoodCategoryUncheckedUpdateManyWithoutImportInfoNestedInput } from '../food-category/food-category-unchecked-update-many-without-import-info-nested.input';
import { BrandedFoodUncheckedUpdateManyWithoutImportInfoNestedInput } from '../branded-food/branded-food-unchecked-update-many-without-import-info-nested.input';
import { NutrientUncheckedUpdateManyWithoutImportInfoNestedInput } from '../nutrient/nutrient-unchecked-update-many-without-import-info-nested.input';
import { FoodPortionUncheckedUpdateManyWithoutImportInfoNestedInput } from '../food-portion/food-portion-unchecked-update-many-without-import-info-nested.input';
import { MeasureUnitUncheckedUpdateManyWithoutImportInfoNestedInput } from '../measure-unit/measure-unit-unchecked-update-many-without-import-info-nested.input';

@InputType()
export class ImportInfoUncheckedUpdateWithoutFoodNutrientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceVersion?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    importDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumFoodDataSourceFieldUpdateOperationsInput, {nullable:true})
    dataSource?: EnumFoodDataSourceFieldUpdateOperationsInput;

    @Field(() => FoodUncheckedUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foods?: FoodUncheckedUpdateManyWithoutImportInfoNestedInput;

    @Field(() => FoodCategoryUncheckedUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foodCategories?: FoodCategoryUncheckedUpdateManyWithoutImportInfoNestedInput;

    @Field(() => BrandedFoodUncheckedUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    brandedFoods?: BrandedFoodUncheckedUpdateManyWithoutImportInfoNestedInput;

    @Field(() => NutrientUncheckedUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    nutrients?: NutrientUncheckedUpdateManyWithoutImportInfoNestedInput;

    @Field(() => FoodPortionUncheckedUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foodPortions?: FoodPortionUncheckedUpdateManyWithoutImportInfoNestedInput;

    @Field(() => MeasureUnitUncheckedUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    measureUnits?: MeasureUnitUncheckedUpdateManyWithoutImportInfoNestedInput;
}
