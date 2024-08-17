import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionnaireCreateWithoutTenantInput } from './questionnaire-create-without-tenant.input';
import { Type } from 'class-transformer';
import { QuestionnaireCreateOrConnectWithoutTenantInput } from './questionnaire-create-or-connect-without-tenant.input';
import { QuestionnaireUpsertWithWhereUniqueWithoutTenantInput } from './questionnaire-upsert-with-where-unique-without-tenant.input';
import { QuestionnaireCreateManyTenantInputEnvelope } from './questionnaire-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionnaireWhereUniqueInput } from './questionnaire-where-unique.input';
import { QuestionnaireUpdateWithWhereUniqueWithoutTenantInput } from './questionnaire-update-with-where-unique-without-tenant.input';
import { QuestionnaireUpdateManyWithWhereWithoutTenantInput } from './questionnaire-update-many-with-where-without-tenant.input';
import { QuestionnaireScalarWhereInput } from './questionnaire-scalar-where.input';

@InputType()
export class QuestionnaireUncheckedUpdateManyWithoutTenantNestedInput {

    @Field(() => [QuestionnaireCreateWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireCreateWithoutTenantInput)
    create?: Array<QuestionnaireCreateWithoutTenantInput>;

    @Field(() => [QuestionnaireCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<QuestionnaireCreateOrConnectWithoutTenantInput>;

    @Field(() => [QuestionnaireUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<QuestionnaireUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => QuestionnaireCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => QuestionnaireCreateManyTenantInputEnvelope)
    createMany?: QuestionnaireCreateManyTenantInputEnvelope;

    @Field(() => [QuestionnaireWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    set?: Array<Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionnaireWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionnaireWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionnaireWhereUniqueInput], {nullable:true})
    @Type(() => QuestionnaireWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionnaireWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionnaireUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<QuestionnaireUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [QuestionnaireUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => QuestionnaireUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<QuestionnaireUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [QuestionnaireScalarWhereInput], {nullable:true})
    @Type(() => QuestionnaireScalarWhereInput)
    deleteMany?: Array<QuestionnaireScalarWhereInput>;
}
