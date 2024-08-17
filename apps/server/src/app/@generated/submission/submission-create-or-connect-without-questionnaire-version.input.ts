import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionCreateWithoutQuestionnaireVersionInput } from './submission-create-without-questionnaire-version.input';

@InputType()
export class SubmissionCreateOrConnectWithoutQuestionnaireVersionInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionCreateWithoutQuestionnaireVersionInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutQuestionnaireVersionInput)
    create!: SubmissionCreateWithoutQuestionnaireVersionInput;
}
