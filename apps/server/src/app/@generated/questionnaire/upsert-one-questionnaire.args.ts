import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateInput } from './questionnaire-create.input';
import { QuestionnaireUpdateInput } from './questionnaire-update.input';

@ArgsType()
export class UpsertOneQuestionnaireArgs {

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireCreateInput, {nullable:false})
    @Type(() => QuestionnaireCreateInput)
    create!: QuestionnaireCreateInput;

    @Field(() => QuestionnaireUpdateInput, {nullable:false})
    @Type(() => QuestionnaireUpdateInput)
    update!: QuestionnaireUpdateInput;
}
