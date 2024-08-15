import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FoodUpdateOneRequiredWithoutNutrientsNestedInput } from '../food/food-update-one-required-without-nutrients-nested.input';
import { NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput } from '../nutrient/nutrient-update-one-required-without-food-nutrients-nested.input';
import { ImportInfoUpdateOneWithoutFoodNutrientsNestedInput } from '../import-info/import-info-update-one-without-food-nutrients-nested.input';

@InputType()
export class FoodNutrientUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    min?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    median?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    max?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    confidenceCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => FoodUpdateOneRequiredWithoutNutrientsNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutNutrientsNestedInput;

    @Field(() => NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput, {nullable:true})
    nutrient?: NutrientUpdateOneRequiredWithoutFoodNutrientsNestedInput;

    @Field(() => ImportInfoUpdateOneWithoutFoodNutrientsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutFoodNutrientsNestedInput;
}
