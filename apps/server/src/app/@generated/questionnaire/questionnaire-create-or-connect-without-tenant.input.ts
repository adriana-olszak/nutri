import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateWithoutTenantInput } from './questionnaire-create-without-tenant.input';

@InputType()
export class QuestionnaireCreateOrConnectWithoutTenantInput {

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireCreateWithoutTenantInput, {nullable:false})
    @Type(() => QuestionnaireCreateWithoutTenantInput)
    create!: QuestionnaireCreateWithoutTenantInput;
}
