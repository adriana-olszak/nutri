import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubmissionCreateWithoutQuestionnaireInput } from './submission-create-without-questionnaire.input';
import { Type } from 'class-transformer';
import { SubmissionCreateOrConnectWithoutQuestionnaireInput } from './submission-create-or-connect-without-questionnaire.input';
import { SubmissionCreateManyQuestionnaireInputEnvelope } from './submission-create-many-questionnaire-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';

@InputType()
export class SubmissionUncheckedCreateNestedManyWithoutQuestionnaireInput {

    @Field(() => [SubmissionCreateWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionCreateWithoutQuestionnaireInput)
    create?: Array<SubmissionCreateWithoutQuestionnaireInput>;

    @Field(() => [SubmissionCreateOrConnectWithoutQuestionnaireInput], {nullable:true})
    @Type(() => SubmissionCreateOrConnectWithoutQuestionnaireInput)
    connectOrCreate?: Array<SubmissionCreateOrConnectWithoutQuestionnaireInput>;

    @Field(() => SubmissionCreateManyQuestionnaireInputEnvelope, {nullable:true})
    @Type(() => SubmissionCreateManyQuestionnaireInputEnvelope)
    createMany?: SubmissionCreateManyQuestionnaireInputEnvelope;

    @Field(() => [SubmissionWhereUniqueInput], {nullable:true})
    @Type(() => SubmissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>>;
}
