import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionnaireVersionUncheckedUpdateManyWithoutQuestionnaireNestedInput } from '../questionnaire-version/questionnaire-version-unchecked-update-many-without-questionnaire-nested.input';
import { SubmissionUncheckedUpdateManyWithoutQuestionnaireNestedInput } from '../submission/submission-unchecked-update-many-without-questionnaire-nested.input';

@InputType()
export class QuestionnaireUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    tenantId?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => QuestionnaireVersionUncheckedUpdateManyWithoutQuestionnaireNestedInput, {nullable:true})
    versions?: QuestionnaireVersionUncheckedUpdateManyWithoutQuestionnaireNestedInput;

    @Field(() => SubmissionUncheckedUpdateManyWithoutQuestionnaireNestedInput, {nullable:true})
    submissions?: SubmissionUncheckedUpdateManyWithoutQuestionnaireNestedInput;
}
