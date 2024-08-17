import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SubmissionScalarWhereInput {

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    AND?: Array<SubmissionScalarWhereInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    OR?: Array<SubmissionScalarWhereInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    NOT?: Array<SubmissionScalarWhereInput>;

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
}
