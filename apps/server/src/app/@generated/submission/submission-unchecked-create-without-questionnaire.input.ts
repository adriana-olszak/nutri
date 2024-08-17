import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerUncheckedCreateNestedManyWithoutSubmissionInput } from '../answer/answer-unchecked-create-nested-many-without-submission.input';

@InputType()
export class SubmissionUncheckedCreateWithoutQuestionnaireInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:true})
    isComplete?: boolean;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => AnswerUncheckedCreateNestedManyWithoutSubmissionInput, {nullable:true})
    answers?: AnswerUncheckedCreateNestedManyWithoutSubmissionInput;
}
