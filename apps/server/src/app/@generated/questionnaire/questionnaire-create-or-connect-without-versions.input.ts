import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateWithoutVersionsInput } from './questionnaire-create-without-versions.input';

@InputType()
export class QuestionnaireCreateOrConnectWithoutVersionsInput {

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireCreateWithoutVersionsInput, {nullable:false})
    @Type(() => QuestionnaireCreateWithoutVersionsInput)
    create!: QuestionnaireCreateWithoutVersionsInput;
}
