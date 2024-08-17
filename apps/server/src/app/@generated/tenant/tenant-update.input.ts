import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuestionnaireUpdateManyWithoutTenantNestedInput } from '../questionnaire/questionnaire-update-many-without-tenant-nested.input';

@InputType()
export class TenantUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => QuestionnaireUpdateManyWithoutTenantNestedInput, {nullable:true})
    questionnaires?: QuestionnaireUpdateManyWithoutTenantNestedInput;
}
