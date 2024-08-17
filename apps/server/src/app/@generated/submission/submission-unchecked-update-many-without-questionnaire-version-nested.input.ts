import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutQuestionnaireVersionInput } from './submission-create-without-questionnaire-version.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutQuestionnaireVersionInput } from './submission-create-or-connect-without-questionnaire-version.input';
import { SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput } from './submission-upsert-with-where-unique-without-questionnaire-version.input';
import { SubmissionCreateManyQuestionnaireVersionInputEnvelope } from './submission-create-many-questionnaire-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput } from './submission-update-with-where-unique-without-questionnaire-version.input';
import { SubmissionUpdateManyWithWhereWithoutQuestionnaireVersionInput } from './submission-update-many-with-where-without-questionnaire-version.input';
import { SubmissionScalarWhereInput } from './submission-scalar-where.input';

@InputType()
export class SubmissionUncheckedUpdateManyWithoutQuestionnaireVersionNestedInput {

    @Field(() => [SubmissionCreateWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutQuestionnaireVersionInput)
    create?: Array<SubmissionCreateWithoutQuestionnaireVersionInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutQuestionnaireVersionInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutQuestionnaireVersionInput>;

    @Field(() => [SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput)
    upsert?: Array<SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput>;

    @Field(() => SubmissionCreateManyQuestionnaireVersionInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyQuestionnaireVersionInputEnvelope)
    createMany?: SubmissionCreateManyQuestionnaireVersionInputEnvelope;

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

    @Field(() => [SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput)
    update?: Array<SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput>;

    @Field(() => [SubmissionUpdateManyWithWhereWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionUpdateManyWithWhereWithoutQuestionnaireVersionInput)
    updateMany?: Array<SubmissionUpdateManyWithWhereWithoutQuestionnaireVersionInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    @Type(() => SubmissionScalarWhereInput)
    deleteMany?: Array<SubmissionScalarWhereInput>;
}
