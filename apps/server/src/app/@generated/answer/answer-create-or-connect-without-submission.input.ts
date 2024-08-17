import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Type } from 'class-transformer';
import { AnswerCreateWithoutSubmissionInput } from './answer-create-without-submission.input';

@InputType()
export class AnswerCreateOrConnectWithoutSubmissionInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    @Type(() => AnswerWhereUniqueInput)
    where!: Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>;

    @Field(() => AnswerCreateWithoutSubmissionInput, {nullable:false})
    @Type(() => AnswerCreateWithoutSubmissionInput)
    create!: AnswerCreateWithoutSubmissionInput;
}
