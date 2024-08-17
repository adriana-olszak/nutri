import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutQuestionnaireInput } from './submission-create-without-questionnaire.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutQuestionnaireInput } from './submission-create-or-connect-without-questionnaire.input';
import { SubmissionUpsertWithWhereUniqueWithoutQuestionnaireInput } from './submission-upsert-with-where-unique-without-questionnaire.input';
import { SubmissionCreateManyQuestionnaireInputEnvelope } from './submission-create-many-questionnaire-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput } from './submission-update-with-where-unique-without-questionnaire.input';
import { SubmissionUpdateManyWithWhereWithoutQuestionnaireInput } from './submission-update-many-with-where-without-questionnaire.input';
import { SubmissionScalarWhereInput } from './submission-scalar-where.input';

@InputType()
export class SubmissionUpdateManyWithoutQuestionnaireNestedInput {

    @Field(() => [SubmissionCreateWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutQuestionnaireInput)
    create?: Array<SubmissionCreateWithoutQuestionnaireInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutQuestionnaireInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutQuestionnaireInput>;

    @Field(() => [SubmissionUpsertWithWhereUniqueWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionUpsertWithWhereUniqueWithoutQuestionnaireInput)
    upsert?: Array<SubmissionUpsertWithWhereUniqueWithoutQuestionnaireInput>;

    @Field(() => SubmissionCreateManyQuestionnaireInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyQuestionnaireInputEnvelope)
    createMany?: SubmissionCreateManyQuestionnaireInputEnvelope;

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

    @Field(() => [SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput)
    update?: Array<SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput>;

    @Field(() => [SubmissionUpdateManyWithWhereWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionUpdateManyWithWhereWithoutQuestionnaireInput)
    updateMany?: Array<SubmissionUpdateManyWithWhereWithoutQuestionnaireInput>;

    @Field(() => [SubmissionScalarWhereInput], {nullable:true})
    @Type(() => SubmissionScalarWhereInput)
    deleteMany?: Array<SubmissionScalarWhereInput>;
}
