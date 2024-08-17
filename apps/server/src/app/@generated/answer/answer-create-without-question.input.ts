import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SubmissionCreateNestedOneWithoutAnswersInput } from '../submission/submission-create-nested-one-without-answers.input';

@InputType()
export class AnswerCreateWithoutQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => SubmissionCreateNestedOneWithoutAnswersInput, {nullable:false})
    submission!: SubmissionCreateNestedOneWithoutAnswersInput;
}
