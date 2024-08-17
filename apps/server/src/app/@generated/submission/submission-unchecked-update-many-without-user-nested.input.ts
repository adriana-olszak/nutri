import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutUserInput } from './submission-create-without-user.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutUserInput } from './submission-create-or-connect-without-user.input';
import { SubmissionUpsertWithWhereUniqueWithoutUserInput } from './submission-upsert-with-where-unique-without-user.input';
import { SubmissionCreateManyUserInputEnvelope } from './submission-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { SubmissionUpdateWithWhereUniqueWithoutUserInput } from './submission-update-with-where-unique-without-user.input';
import { SubmissionUpdateManyWithWhereWithoutUserInput } from './submission-update-many-with-where-without-user.input';
import { SubmissionScalarWhereInput } from './submission-scalar-where.input';

@InputType()
export class SubmissionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [SubmissionCreateWithoutUserInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutUserInput)
    create?: Array<SubmissionCreateWithoutUserInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutUserInput>;

    @Field(() => [SubmissionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SubmissionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SubmissionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SubmissionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyUserInputEnvelope)
    createMany?: SubmissionCreateManyUserInputEnvelope;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;

    @Field(() => [SubmissionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SubmissionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SubmissionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SubmissionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SubmissionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SubmissionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    @Type(() => SubmissionScalarWhereInput)
    deleteMany?: Array<SubmissionScalarWhereInput>;
}
