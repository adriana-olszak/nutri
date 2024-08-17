import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireVersionWhereUniqueInput } from './questionnaire-version-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireVersionCreateInput } from './questionnaire-version-create.input';
import { QuestionnaireVersionUpdateInput } from './questionnaire-version-update.input';

@ArgsType()
export class UpsertOneQuestionnaireVersionArgs {

    @Field(() => QuestionnaireVersionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireVersionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireVersionWhereUniqueInput, 'id' | 'questionnaireId_versionNumber'>;

    @Field(() => QuestionnaireVersionCreateInput, {nullable:false})
    @Type(() => QuestionnaireVersionCreateInput)
    create!: QuestionnaireVersionCreateInput;

    @Field(() => QuestionnaireVersionUpdateInput, {nullable:false})
    @Type(() => QuestionnaireVersionUpdateInput)
    update!: QuestionnaireVersionUpdateInput;
}
