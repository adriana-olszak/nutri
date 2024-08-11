import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput } from '../measure-unit/measure-unit-update-one-required-without-food-portion-nested.input';
import { ImportInfoUpdateOneRequiredWithoutFoodPortionsNestedInput } from '../import-info/import-info-update-one-required-without-food-portions-nested.input';

@InputType()
export class FoodPortionUpdateWithoutFoodInput {

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

    @Field(() => MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput, {nullable:true})
    measureUnit?: MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutFoodPortionsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutFoodPortionsNestedInput;
}
