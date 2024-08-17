import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateWithoutTenantInput } from './questionnaire-create-without-tenant.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateOrConnectWithoutTenantInput } from './questionnaire-create-or-connect-without-tenant.input';
import { QuestionnaireCreateManyTenantInputEnvelope } from './questionnaire-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';

@InputType()
export class QuestionnaireCreateNestedManyWithoutTenantInput {

    @Field(() => [QuestionnaireCreateWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireCreateWithoutTenantInput)
    create?: Array<QuestionnaireCreateWithoutTenantInput>;

    @Field(() => [QuestionnaireCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<QuestionnaireCreateOrConnectWithoutTenantInput>;

    @Field(() => QuestionnaireCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => QuestionnaireCreateManyTenantInputEnvelope)
    createMany?: QuestionnaireCreateManyTenantInputEnvelope;

    @Field(() => [QuestionnaireWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>>;
}
