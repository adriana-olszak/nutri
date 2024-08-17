import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { QuestionnaireRelationFilter } from '../questionnaire/questionnaire-relation-filter.input';
import { QuestionnaireVersionRelationFilter } from '../questionnaire-version/questionnaire-version-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AnswerListRelationFilter } from '../answer/answer-list-relation-filter.input';

@InputType()
export class SubmissionWhereInput {

    @Field(() => [SubmissionWhereInput], {nullable:true})
    AND?: Array<SubmissionWhereInput>;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    OR?: Array<SubmissionWhereInput>;

    @Field(() => [SubmissionWhereInput], {nullable:true})
    NOT?: Array<SubmissionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionnaireId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionnaireVersionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isComplete?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    completedAt?: DateTimeNullableFilter;

    @Field(() => QuestionnaireRelationFilter, {nullable:true})
    questionnaire?: QuestionnaireRelationFilter;

    @Field(() => QuestionnaireVersionRelationFilter, {nullable:true})
    questionnaireVersion?: QuestionnaireVersionRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => AnswerListRelationFilter, {nullable:true})
    answers?: AnswerListRelationFilter;
}
