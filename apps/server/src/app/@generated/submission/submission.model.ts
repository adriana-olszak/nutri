import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Questionnaire } from '../questionnaire/questionnaire.model';
import { QuestionnaireVersion } from '../questionnaire-version/questionnaire-version.model';
import { User } from '../user/user.model';
import { Answer } from '../answer/answer.model';
import { SubmissionCount } from './submission-count.output';

@ObjectType()
export class Submission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionnaireId!: string;

    @Field(() => String, {nullable:false})
    questionnaireVersionId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isComplete!: boolean;

    @Field(() => Date, {nullable:false})
    startedAt!: Date;

    @Field(() => Date, {nullable:true})
    completedAt!: Date | null;

    @Field(() => Questionnaire, {nullable:false})
    questionnaire?: Questionnaire;

    @Field(() => QuestionnaireVersion, {nullable:false})
    questionnaireVersion?: QuestionnaireVersion;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Answer], {nullable:true})
    answers?: Array<Answer>;

    @Field(() => SubmissionCount, {nullable:false})
    _count?: SubmissionCount;
}
