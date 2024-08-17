import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SectionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput } from '../section/section-unchecked-update-many-without-questionnaire-version-nested.input';
import { SubmissionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput } from '../submission/submission-unchecked-update-many-without-questionnaire-version-nested.input';

@InputType()
export class QuestionnaireVersionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    questionnaireId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    versionNumber?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SectionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput, {nullable:true})
    sections?: SectionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput;

    @Field(() => SubmissionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput, {nullable:true})
    submissions?: SubmissionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput;
}
