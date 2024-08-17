import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutSubmissionInput } from './answer-create-without-submission.input';
import { Type } from 'class-transformer';
import { AnswerCreateOrConnectWithoutSubmissionInput } from './answer-create-or-connect-without-submission.input';
import { AnswerUpsertWithWhereUniqueWithoutSubmissionInput } from './answer-upsert-with-where-unique-without-submission.input';
import { AnswerCreateManySubmissionInputEnvelope } from './answer-create-many-submission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithWhereUniqueWithoutSubmissionInput } from './answer-update-with-where-unique-without-submission.input';
import { AnswerUpdateManyWithWhereWithoutSubmissionInput } from './answer-update-many-with-where-without-submission.input';
import { AnswerScalarWhereInput } from './answer-scalar-where.input';

@InputType()
export class AnswerUpdateManyWithoutSubmissionNestedInput {

    @Field(() => [AnswerCreateWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerCreateWithoutSubmissionInput)
    create?: Array<AnswerCreateWithoutSubmissionInput>;

    @Field(() => [AnswerCreateOrConnectWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerCreateOrConnectWithoutSubmissionInput)
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutSubmissionInput>;

    @Field(() => [AnswerUpsertWithWhereUniqueWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerUpsertWithWhereUniqueWithoutSubmissionInput)
    upsert?: Array<AnswerUpsertWithWhereUniqueWithoutSubmissionInput>;

    @Field(() => AnswerCreateManySubmissionInputEnvelope, {nullable:true})
    @Type(() => AnswerCreateManySubmissionInputEnvelope)
    createMany?: AnswerCreateManySubmissionInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    @Type(() => AnswerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    @Type(() => AnswerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    @Type(() => AnswerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    @Type(() => AnswerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnswerWhereUniqueInput, 'id'>>;

    @Field(() => [AnswerUpdateWithWhereUniqueWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerUpdateWithWhereUniqueWithoutSubmissionInput)
    update?: Array<AnswerUpdateWithWhereUniqueWithoutSubmissionInput>;

    @Field(() => [AnswerUpdateManyWithWhereWithoutSubmissionInput], {nullable:true})
    @Type(() => AnswerUpdateManyWithWhereWithoutSubmissionInput)
    updateMany?: Array<AnswerUpdateManyWithWhereWithoutSubmissionInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    @Type(() => AnswerScalarWhereInput)
    deleteMany?: Array<AnswerScalarWhereInput>;
}
