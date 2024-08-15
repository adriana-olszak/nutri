import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FoodPortionUncheckedUpdateManyWithoutMeasureUnitNestedInput } from '../food-portion/food-portion-unchecked-update-many-without-measure-unit-nested.input';

@InputType()
export class MeasureUnitUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    importInfoId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FoodPortionUncheckedUpdateManyWithoutMeasureUnitNestedInput, {nullable:true})
    FoodPortion?: FoodPortionUncheckedUpdateManyWithoutMeasureUnitNestedInput;
}
