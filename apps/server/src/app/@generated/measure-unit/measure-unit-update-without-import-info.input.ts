import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FoodPortionUpdateManyWithoutMeasureUnitNestedInput } from '../food-portion/food-portion-update-many-without-measure-unit-nested.input';

@InputType()
export class MeasureUnitUpdateWithoutImportInfoInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FoodPortionUpdateManyWithoutMeasureUnitNestedInput, {nullable:true})
    FoodPortion?: FoodPortionUpdateManyWithoutMeasureUnitNestedInput;
}
