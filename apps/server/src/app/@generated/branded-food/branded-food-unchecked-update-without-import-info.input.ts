import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NutritionLabelUncheckedUpdateOneWithoutBrandedFoodNestedInput } from '../nutrition-label/nutrition-label-unchecked-update-one-without-branded-food-nested.input';

@InputType()
export class BrandedFoodUncheckedUpdateWithoutImportInfoInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    foodId?: StringFieldUpdateOperationsInput;

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

    @Field(() => NutritionLabelUncheckedUpdateOneWithoutBrandedFoodNestedInput, {nullable:true})
    nutritionLabel?: NutritionLabelUncheckedUpdateOneWithoutBrandedFoodNestedInput;
}
