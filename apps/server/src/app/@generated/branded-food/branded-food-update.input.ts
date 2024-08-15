import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { FoodUpdateOneRequiredWithoutBrandedFoodNestedInput } from '../food/food-update-one-required-without-branded-food-nested.input';
import { ImportInfoUpdateOneWithoutBrandedFoodsNestedInput } from '../import-info/import-info-update-one-without-branded-foods-nested.input';
import { NutritionLabelUpdateOneWithoutBrandedFoodNestedInput } from '../nutrition-label/nutrition-label-update-one-without-branded-food-nested.input';

@InputType()
export class BrandedFoodUpdateInput {

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

    @Field(() => FoodUpdateOneRequiredWithoutBrandedFoodNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutBrandedFoodNestedInput;

    @Field(() => ImportInfoUpdateOneWithoutBrandedFoodsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutBrandedFoodsNestedInput;

    @Field(() => NutritionLabelUpdateOneWithoutBrandedFoodNestedInput, {nullable:true})
    nutritionLabel?: NutritionLabelUpdateOneWithoutBrandedFoodNestedInput;
}
