import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class AnswerScalarWhereWithAggregatesInput {

    @Field(() => [AnswerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnswerScalarWhereWithAggregatesInput>;

    @Field(() => [AnswerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnswerScalarWhereWithAggregatesInput>;

    @Field(() => [AnswerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnswerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    submissionId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionId?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    value?: JsonWithAggregatesFilter;
}
