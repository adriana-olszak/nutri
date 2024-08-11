import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumFoodDataSourceFieldUpdateOperationsInput } from '../prisma/enum-food-data-source-field-update-operations.input';
import { FoodUpdateManyWithoutImportInfoNestedInput } from '../food/food-update-many-without-import-info-nested.input';
import { FoodCategoryUpdateManyWithoutImportInfoNestedInput } from '../food-category/food-category-update-many-without-import-info-nested.input';
import { BrandedFoodUpdateManyWithoutImportInfoNestedInput } from '../branded-food/branded-food-update-many-without-import-info-nested.input';
import { FoodNutrientUpdateManyWithoutImportInfoNestedInput } from '../food-nutrient/food-nutrient-update-many-without-import-info-nested.input';
import { FoodPortionUpdateManyWithoutImportInfoNestedInput } from '../food-portion/food-portion-update-many-without-import-info-nested.input';
import { MeasureUnitUpdateManyWithoutImportInfoNestedInput } from '../measure-unit/measure-unit-update-many-without-import-info-nested.input';

@InputType()
export class ImportInfoUpdateWithoutNutrientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceVersion?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    importDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumFoodDataSourceFieldUpdateOperationsInput, {nullable:true})
    dataSource?: EnumFoodDataSourceFieldUpdateOperationsInput;

    @Field(() => FoodUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foods?: FoodUpdateManyWithoutImportInfoNestedInput;

    @Field(() => FoodCategoryUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foodCategories?: FoodCategoryUpdateManyWithoutImportInfoNestedInput;

    @Field(() => BrandedFoodUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    brandedFoods?: BrandedFoodUpdateManyWithoutImportInfoNestedInput;

    @Field(() => FoodNutrientUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foodNutrients?: FoodNutrientUpdateManyWithoutImportInfoNestedInput;

    @Field(() => FoodPortionUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    foodPortions?: FoodPortionUpdateManyWithoutImportInfoNestedInput;

    @Field(() => MeasureUnitUpdateManyWithoutImportInfoNestedInput, {nullable:true})
    measureUnits?: MeasureUnitUpdateManyWithoutImportInfoNestedInput;
}
