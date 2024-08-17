import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateWithoutSubmissionsInput } from './questionnaire-version-create-without-submissions.input';

@InputType()
export class QuestionnaireVersionCreateOrConnectWithoutSubmissionsInput {

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateWithoutSubmissionsInput)
    create!: QuestionnaireVersionCreateWithoutSubmissionsInput;
}
