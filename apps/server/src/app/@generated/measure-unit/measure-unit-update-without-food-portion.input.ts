import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput } from '../import-info/import-info-update-one-required-without-measure-units-nested.input';

@InputType()
export class MeasureUnitUpdateWithoutFoodPortionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput;
}
