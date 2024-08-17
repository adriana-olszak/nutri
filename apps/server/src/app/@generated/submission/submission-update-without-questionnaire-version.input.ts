import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput } from '../questionnaire/questionnaire-update-one-required-without-submissions-nested.input';
import { UserUpdateOneRequiredWithoutSubmissionsNestedInput } from '../user/user-update-one-required-without-submissions-nested.input';
import { AnswerUpdateManyWithoutSubmissionNestedInput } from '../answer/answer-update-many-without-submission-nested.input';

@InputType()
export class SubmissionUpdateWithoutQuestionnaireVersionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isComplete?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput, {nullable:true})
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutSubmissionsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutSubmissionsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput;

    @Field(() => AnswerUpdateManyWithoutSubmissionNestedInput, {nullable:true})
    answers?: AnswerUpdateManyWithoutSubmissionNestedInput;
}
