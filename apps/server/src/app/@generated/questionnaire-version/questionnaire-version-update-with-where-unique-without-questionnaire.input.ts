import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionUpdateWithoutQuestionnaireInput } from './questionnaire-version-update-without-questionnaire.input';

@InputType()
export class QuestionnaireVersionUpdateWithWhereUniqueWithoutQuestionnaireInput {

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionUpdateWithoutQuestionnaireInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateWithoutQuestionnaireInput)
    data!: QuestionnaireVersionUpdateWithoutQuestionnaireInput;
}
