import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { SubmissionUpdateOneRequiredWithoutAnswersNestedInput } from '../submission/submission-update-one-required-without-answers-nested.input';

@InputType()
export class AnswerUpdateWithoutQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => SubmissionUpdateOneRequiredWithoutAnswersNestedInput, {nullable:true})
    submission?: SubmissionUpdateOneRequiredWithoutAnswersNestedInput;
}
