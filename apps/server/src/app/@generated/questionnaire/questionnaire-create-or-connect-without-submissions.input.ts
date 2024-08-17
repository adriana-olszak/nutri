import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateWithoutSubmissionsInput } from './questionnaire-create-without-submissions.input';

@InputType()
export class QuestionnaireCreateOrConnectWithoutSubmissionsInput {

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireCreateWithoutSubmissionsInput, {nullable:false})
    @Type(() => QuestionnaireCreateWithoutSubmissionsInput)
    create!: QuestionnaireCreateWithoutSubmissionsInput;
}
