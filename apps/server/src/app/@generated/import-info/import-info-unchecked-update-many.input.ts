import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumFoodDataSourceFieldUpdateOperationsInput } from '../prisma/enum-food-data-source-field-update-operations.input';

@InputType()
export class ImportInfoUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceVersion?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    importDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumFoodDataSourceFieldUpdateOperationsInput, {nullable:true})
    dataSource?: EnumFoodDataSourceFieldUpdateOperationsInput;
}
