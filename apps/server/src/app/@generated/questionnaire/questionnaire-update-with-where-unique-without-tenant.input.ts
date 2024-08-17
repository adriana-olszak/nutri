import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionnaireUpdateWithoutTenantInput } from './questionnaire-update-without-tenant.input';

@InputType()
export class QuestionnaireUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => QuestionnaireWhereUniqueInput, {nullable:false})
    @Type(() => QuestionnaireWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>;

    @Field(() => QuestionnaireUpdateWithoutTenantInput, {nullable:false})
    @Type(() => QuestionnaireUpdateWithoutTenantInput)
    data!: QuestionnaireUpdateWithoutTenantInput;
}
