import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { QuestionCreateNestedOneWithoutAnswersInput } from '../question/question-create-nested-one-without-answers.input';

@InputType()
export class AnswerCreateWithoutSubmissionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => QuestionCreateNestedOneWithoutAnswersInput, {nullable:false})
    question!: QuestionCreateNestedOneWithoutAnswersInput;
}
