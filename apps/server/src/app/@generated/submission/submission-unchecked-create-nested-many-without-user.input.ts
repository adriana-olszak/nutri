import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutUserInput } from './submission-create-without-user.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutUserInput } from './submission-create-or-connect-without-user.input';
import { SubmissionCreateManyUserInputEnvelope } from './submission-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@InputType()
export class SubmissionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [SubmissionCreateWithoutUserInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutUserInput)
    create?: Array<SubmissionCreateWithoutUserInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutUserInput>;

    @Field(() => SubmissionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyUserInputEnvelope)
    createMany?: SubmissionCreateManyUserInputEnvelope;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;
}
