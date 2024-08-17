import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionUpdateWithoutQuestionnaireInput } from './questionnaire-version-update-without-questionnaire.input';
import { QuestionnaireVersionCreateWithoutQuestionnaireInput } from './questionnaire-version-create-without-questionnaire.input';

@InputType()
export class QuestionnaireVersionUpsertWithWhereUniqueWithoutQuestionnaireInput {

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionUpdateWithoutQuestionnaireInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateWithoutQuestionnaireInput)
    update!: QuestionnaireVersionUpdateWithoutQuestionnaireInput;

    @Field(() => QuestionnaireVersionCreateWithoutQuestionnaireInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateWithoutQuestionnaireInput)
    create!: QuestionnaireVersionCreateWithoutQuestionnaireInput;
}
