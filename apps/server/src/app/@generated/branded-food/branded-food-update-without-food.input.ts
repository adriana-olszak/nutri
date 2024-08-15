import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { ImportInfoUpdateOneRequiredWithoutBrandedFoodsNestedInput } from '../import-info/import-info-update-one-required-without-branded-foods-nested.input';
import { NutritionLabelUpdateOneWithoutBrandedFoodNestedInput } from '../nutrition-label/nutrition-label-update-one-without-branded-food-nested.input';

@InputType()
export class BrandedFoodUpdateWithoutFoodInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandOwner?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gtinUpc?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ingredients?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    servingSize?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    servingUnit?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutBrandedFoodsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutBrandedFoodsNestedInput;

    @Field(() => NutritionLabelUpdateOneWithoutBrandedFoodNestedInput, {nullable:true})
    nutritionLabel?: NutritionLabelUpdateOneWithoutBrandedFoodNestedInput;
}
