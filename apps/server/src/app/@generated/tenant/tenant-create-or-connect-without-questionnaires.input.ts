import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutQuestionnairesInput } from './tenant-create-without-questionnaires.input';

@InputType()
export class TenantCreateOrConnectWithoutQuestionnairesInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;

    @Field(() => TenantCreateWithoutQuestionnairesInput, {nullable:false})
    @Type(() => TenantCreateWithoutQuestionnairesInput)
    create!: TenantCreateWithoutQuestionnairesInput;
}
