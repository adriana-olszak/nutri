import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class AnswerScalarWhereInput {

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    AND?: Array<AnswerScalarWhereInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    OR?: Array<AnswerScalarWhereInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    NOT?: Array<AnswerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    submissionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;
}
