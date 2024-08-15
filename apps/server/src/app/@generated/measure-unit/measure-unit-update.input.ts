import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FoodPortionUpdateManyWithoutMeasureUnitNestedInput } from '../food-portion/food-portion-update-many-without-measure-unit-nested.input';
import { ImportInfoUpdateOneWithoutMeasureUnitsNestedInput } from '../import-info/import-info-update-one-without-measure-units-nested.input';

@InputType()
export class MeasureUnitUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => FoodPortionUpdateManyWithoutMeasureUnitNestedInput, {nullable:true})
    FoodPortion?: FoodPortionUpdateManyWithoutMeasureUnitNestedInput;

    @Field(() => ImportInfoUpdateOneWithoutMeasureUnitsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutMeasureUnitsNestedInput;
}
