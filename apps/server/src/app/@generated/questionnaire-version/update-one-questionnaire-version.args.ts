import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireVersionUpdateInput } from './questionnaire-version-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';

@ArgsType()
export class UpdateOneQuestionnaireVersionArgs {

    @Field(() => QuestionnaireVersionUpdateInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateInput)
    data!: QuestionnaireVersionUpdateInput;

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;
}
