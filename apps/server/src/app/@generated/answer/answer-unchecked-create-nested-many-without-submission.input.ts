import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutSubmissionInput } from './answer-create-without-submission.input';
import { Type } from 'class-transformer';
import { AnswerCreateOrConnectWithoutSubmissionInput } from './answer-create-or-connect-without-submission.input';
import { AnswerCreateManySubmissionInputEnvelope } from './answer-create-many-submission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@InputType()
export class AnswerUncheckedCreateNestedManyWithoutSubmissionInput {

    @Field(() => [AnswerCreateWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerCreateWithoutSubmissionInput)
    create?: Array<AnswerCreateWithoutSubmissionInput>;

    @Field(() => [AnswerCreateOrConnectWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerCreateOrConnectWithoutSubmissionInput)
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutSubmissionInput>;

    @Field(() => AnswerCreateManySubmissionInputEnvelope, {nullable:true})
    @Type(() => AnswerCreateManySubmissionInputEnvelope)
    createMany?: AnswerCreateManySubmissionInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    @Type(() => AnswerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>>;
}
