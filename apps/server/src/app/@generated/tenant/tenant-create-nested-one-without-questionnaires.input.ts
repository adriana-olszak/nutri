import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutQuestionnairesInput } from './tenant-create-without-questionnaires.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutQuestionnairesInput } from './tenant-create-or-connect-without-questionnaires.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutQuestionnairesInput {

    @Field(() => TenantCreateWithoutQuestionnairesInput, {nullable:true})
    @Type(() => TenantCreateWithoutQuestionnairesInput)
    create?: TenantCreateWithoutQuestionnairesInput;

    @Field(() => TenantCreateOrConnectWithoutQuestionnairesInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutQuestionnairesInput)
    connectOrCreate?: TenantCreateOrConnectWithoutQuestionnairesInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;
}
