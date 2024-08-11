import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImportInfoUpdateOneRequiredWithoutNutrientsNestedInput } from '../import-info/import-info-update-one-required-without-nutrients-nested.input';

@InputType()
export class NutrientUpdateWithoutFoodNutrientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unitName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutNutrientsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutNutrientsNestedInput;
}
