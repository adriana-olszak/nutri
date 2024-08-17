import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionnaireUncheckedUpdateManyWithoutTenantNestedInput } from '../questionnaire/questionnaire-unchecked-update-many-without-tenant-nested.input';

@InputType()
export class TenantUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionnaireUncheckedUpdateManyWithoutTenantNestedInput, {nullable:true})
    questionnaires?: QuestionnaireUncheckedUpdateManyWithoutTenantNestedInput;
}
