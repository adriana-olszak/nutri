import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput } from '../questionnaire-version/questionnaire-version-update-one-required-without-sections-nested.input';
import { QuestionUpdateManyWithoutSectionNestedInput } from '../question/question-update-many-without-section-nested.input';

@InputType()
export class SectionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput, {nullable:true})
    questionnaireVersion?: QuestionnaireVersionUpdateOneRequiredWithoutSectionsNestedInput;

    @Field(() => QuestionUpdateManyWithoutSectionNestedInput, {nullable:true})
    questions?: QuestionUpdateManyWithoutSectionNestedInput;
}
