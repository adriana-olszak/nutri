import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateWithoutQuestionnaireVersionInput } from './submission-update-without-questionnaire-version.input';
import { SubmissionCreateWithoutQuestionnaireVersionInput } from './submission-create-without-questionnaire-version.input';

@InputType()
export class SubmissionUpsertWithWhereUniqueWithoutQuestionnaireVersionInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionUpdateWithoutQuestionnaireVersionInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutQuestionnaireVersionInput)
    update!: SubmissionUpdateWithoutQuestionnaireVersionInput;

    @Field(() => SubmissionCreateWithoutQuestionnaireVersionInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutQuestionnaireVersionInput)
    create!: SubmissionCreateWithoutQuestionnaireVersionInput;
}
