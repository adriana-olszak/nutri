import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { SubmissionRelationFilter } from '../submission/submission-relation-filter.input';
import { QuestionRelationFilter } from '../question/question-relation-filter.input';

@InputType()
export class AnswerWhereInput {

    @Field(() => [AnswerWhereInput], {nullable:true})
    AND?: Array<AnswerWhereInput>;

    @Field(() => [AnswerWhereInput], {nullable:true})
    OR?: Array<AnswerWhereInput>;

    @Field(() => [AnswerWhereInput], {nullable:true})
    NOT?: Array<AnswerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    submissionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => SubmissionRelationFilter, {nullable:true})
    submission?: SubmissionRelationFilter;

    @Field(() => QuestionRelationFilter, {nullable:true})
    question?: QuestionRelationFilter;
}
