import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueQuestionnaireOrThrowArgs {

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;
}
