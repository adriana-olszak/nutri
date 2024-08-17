import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateWithoutQuestionnaireInput } from './questionnaire-version-create-without-questionnaire.input';

@InputType()
export class QuestionnaireVersionCreateOrConnectWithoutQuestionnaireInput {

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionCreateWithoutQuestionnaireInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateWithoutQuestionnaireInput)
    create!: QuestionnaireVersionCreateWithoutQuestionnaireInput;
}
