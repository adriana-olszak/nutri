import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateNestedOneWithoutSubmissionsInput } from '../questionnaire/questionnaire-create-nested-one-without-submissions.input';
import { QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput } from '../questionnaire-version/questionnaire-version-create-nested-one-without-submissions.input';
import { UserCreateNestedOneWithoutSubmissionsInput } from '../user/user-create-nested-one-without-submissions.input';
import { AnswerCreateNestedManyWithoutSubmissionInput } from '../answer/answer-create-nested-many-without-submission.input';

@InputType()
export class SubmissionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isComplete?: boolean;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => QuestionnaireCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    questionnaire!: QuestionnaireCreateNestedOneWithoutSubmissionsInput;

    @Field(() => QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    questionnaireVersion!: QuestionnaireVersionCreateNestedOneWithoutSubmissionsInput;

    @Field(() => UserCreateNestedOneWithoutSubmissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSubmissionsInput;

    @Field(() => AnswerCreateNestedManyWithoutSubmissionInput, {nullable:true})
    answers?: AnswerCreateNestedManyWithoutSubmissionInput;
}
