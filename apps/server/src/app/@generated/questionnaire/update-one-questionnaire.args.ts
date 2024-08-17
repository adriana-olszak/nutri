import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionnaireUpdateInput } from './questionnaire-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';

@ArgsType()
export class UpdateOneQuestionnaireArgs {

    @Field(() => QuestionnaireUpdateInput, {nullable:false})
    @Type(() => QuestionnaireUpdateInput)
    data!: QuestionnaireUpdateInput;

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;
}
