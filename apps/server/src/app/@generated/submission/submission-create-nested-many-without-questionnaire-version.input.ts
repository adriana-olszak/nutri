import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutQuestionnaireVersionInput } from './submission-create-without-questionnaire-version.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutQuestionnaireVersionInput } from './submission-create-or-connect-without-questionnaire-version.input';
import { SubmissionCreateManyQuestionnaireVersionInputEnvelope } from './submission-create-many-questionnaire-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@InputType()
export class SubmissionCreateNestedManyWithoutQuestionnaireVersionInput {

    @Field(() => [SubmissionCreateWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutQuestionnaireVersionInput)
    create?: Array<SubmissionCreateWithoutQuestionnaireVersionInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutQuestionnaireVersionInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutQuestionnaireVersionInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutQuestionnaireVersionInput>;

    @Field(() => SubmissionCreateManyQuestionnaireVersionInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyQuestionnaireVersionInputEnvelope)
    createMany?: SubmissionCreateManyQuestionnaireVersionInputEnvelope;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;
}
