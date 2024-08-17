import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInput } from './submission-where-unique.input';
import { Type } from 'class-transformer';
import { SubmissionUpdateWithoutQuestionnaireInput } from './submission-update-without-questionnaire.input';

@InputType()
export class SubmissionUpdateWithWhereUniqueWithoutQuestionnaireInput {

    @Field(() => SubmissionWhereUniqueInput, {nullable:false})
    @Type(() => SubmissionWhereUniqueInput)
    where!: Prisma.AtLeast<SubmissionWhereUniqueInput, 'id'>;

    @Field(() => SubmissionUpdateWithoutQuestionnaireInput, {nullable:false})
    @Type(() => SubmissionUpdateWithoutQuestionnaireInput)
    data!: SubmissionUpdateWithoutQuestionnaireInput;
}
