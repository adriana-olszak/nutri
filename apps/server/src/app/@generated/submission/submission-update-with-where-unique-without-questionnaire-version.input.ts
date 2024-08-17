import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateWithoutQuestionnaireVersionInput } from './submission-update-without-questionnaire-version.input';

@InputType()
export class SubmissionUpdateWithWhereUniqueWithoutQuestionnaireVersionInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionUpdateWithoutQuestionnaireVersionInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutQuestionnaireVersionInput)
    data!: SubmissionUpdateWithoutQuestionnaireVersionInput;
}
