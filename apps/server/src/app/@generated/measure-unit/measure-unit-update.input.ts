import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FoodPortionUpdateManyWithoutMeasureUnitNestedInput } from '../food-portion/food-portion-update-many-without-measure-unit-nested.input';
import { ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput } from '../import-info/import-info-update-one-required-without-measure-units-nested.input';

@InputType()
export class MeasureUnitUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FoodPortionUpdateManyWithoutMeasureUnitNestedInput, {nullable:true})
    FoodPortion?: FoodPortionUpdateManyWithoutMeasureUnitNestedInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput;
}
