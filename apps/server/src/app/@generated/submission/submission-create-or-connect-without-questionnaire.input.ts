import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionCreateWithoutQuestionnaireInput } from './submission-create-without-questionnaire.input';

@InputType()
export class SubmissionCreateOrConnectWithoutQuestionnaireInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionCreateWithoutQuestionnaireInput, {nullable:false})
    @Type(() => SubmissionCreateWithoutQuestionnaireInput)
    create!: SubmissionCreateWithoutQuestionnaireInput;
}
