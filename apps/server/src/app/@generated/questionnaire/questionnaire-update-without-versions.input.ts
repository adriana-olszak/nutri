import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TenantUpdateOneWithoutQuestionnairesNestedInput } from '../tenant/tenant-update-one-without-questionnaires-nested.input';
import { SubmissionUpdateManyWithoutQuestionnaireNestedInput } from '../submission/submission-update-many-without-questionnaire-nested.input';

@InputType()
export class QuestionnaireUpdateWithoutVersionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPublic?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneWithoutQuestionnairesNestedInput, {nullable:true})
    tenant?: TenantUpdateOneWithoutQuestionnairesNestedInput;

    @Field(() => SubmissionUpdateManyWithoutQuestionnaireNestedInput, {nullable:true})
    submissions?: SubmissionUpdateManyWithoutQuestionnaireNestedInput;
}
