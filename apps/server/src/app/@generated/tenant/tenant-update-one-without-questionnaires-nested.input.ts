import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutQuestionnairesInput } from './tenant-create-without-questionnaires.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutQuestionnairesInput } from './tenant-create-or-connect-without-questionnaires.input';
import { TenantUpsertWithoutQuestionnairesInput } from './tenant-upsert-without-questionnaires.input';
import { TenantWhereInput } from './tenant-where.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutQuestionnairesInput } from './tenant-update-to-one-with-where-without-questionnaires.input';

@InputType()
export class TenantUpdateOneWithoutQuestionnairesNestedInput {

    @Field(() => TenantCreateWithoutQuestionnairesInput, {nullable:true})
    @Type(() => TenantCreateWithoutQuestionnairesInput)
    create?: TenantCreateWithoutQuestionnairesInput;

    @Field(() => TenantCreateOrConnectWithoutQuestionnairesInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutQuestionnairesInput)
    connectOrCreate?: TenantCreateOrConnectWithoutQuestionnairesInput;

    @Field(() => TenantUpsertWithoutQuestionnairesInput, {nullable:true})
    @Type(() => TenantUpsertWithoutQuestionnairesInput)
    upsert?: TenantUpsertWithoutQuestionnairesInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    disconnect?: TenantWhereInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    delete?: TenantWhereInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutQuestionnairesInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutQuestionnairesInput)
    update?: TenantUpdateToOneWithWhereWithoutQuestionnairesInput;
}
