import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FoodUpdateOneRequiredWithoutPortionsNestedInput } from '../food/food-update-one-required-without-portions-nested.input';
import { ImportInfoUpdateOneWithoutFoodPortionsNestedInput } from '../import-info/import-info-update-one-without-food-portions-nested.input';

@InputType()
export class FoodPortionUpdateWithoutMeasureUnitInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    gramWeight?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    portionDescription?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => FoodUpdateOneRequiredWithoutPortionsNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutPortionsNestedInput;

    @Field(() => ImportInfoUpdateOneWithoutFoodPortionsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutFoodPortionsNestedInput;
}
