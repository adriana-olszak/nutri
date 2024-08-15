import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImportInfoUpdateOneWithoutMeasureUnitsNestedInput } from '../import-info/import-info-update-one-without-measure-units-nested.input';

@InputType()
export class MeasureUnitUpdateWithoutFoodPortionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ImportInfoUpdateOneWithoutMeasureUnitsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutMeasureUnitsNestedInput;
}
