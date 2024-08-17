import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput } from '../questionnaire/questionnaire-update-one-required-without-versions-nested.input';
import { SectionUpdateManyWithoutQuestionnaireVersionNestedInput } from '../section/section-update-many-without-questionnaire-version-nested.input';

@InputType()
export class QuestionnaireVersionUpdateWithoutSubmissionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    versionNumber?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput, {nullable:true})
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutVersionsNestedInput;

    @Field(() => SectionUpdateManyWithoutQuestionnaireVersionNestedInput, {nullable:true})
    sections?: SectionUpdateManyWithoutQuestionnaireVersionNestedInput;
}
