import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { QuestionUpdateOneRequiredWithoutAnswersNestedInput } from '../question/question-update-one-required-without-answers-nested.input';

@InputType()
export class AnswerUpdateWithoutSubmissionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => QuestionUpdateOneRequiredWithoutAnswersNestedInput, {nullable:true})
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
}
