import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Type } from 'class-transformer';
import { AnswerUpdateWithoutSubmissionInput } from './answer-update-without-submission.input';

@InputType()
export class AnswerUpdateWithWhereUniqueWithoutSubmissionInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    @Type(() => AnswerWhereUniqueInput)
    where!: Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>;

    @Field(() => AnswerUpdateWithoutSubmissionInput, {nullable:false})
    @Type(() => AnswerUpdateWithoutSubmissionInput)
    data!: AnswerUpdateWithoutSubmissionInput;
}
