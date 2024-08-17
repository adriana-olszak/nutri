import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Type } from 'class-transformer';
import { AnswerUpdateWithoutSubmissionInput } from './answer-update-without-submission.input';
import { AnswerCreateWithoutSubmissionInput } from './answer-create-without-submission.input';

@InputType()
export class AnswerUpsertWithWhereUniqueWithoutSubmissionInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    @Type(() => AnswerWhereUniqueInput)
    where!: Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>;

    @Field(() => AnswerUpdateWithoutSubmissionInput, {nullable:false})
    @Type(() => AnswerUpdateWithoutSubmissionInput)
    update!: AnswerUpdateWithoutSubmissionInput;

    @Field(() => AnswerCreateWithoutSubmissionInput, {nullable:false})
    @Type(() => AnswerCreateWithoutSubmissionInput)
    create!: AnswerCreateWithoutSubmissionInput;
}
