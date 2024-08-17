import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateInput } from './tenant-create.input';
import { TenantUpdateInput } from './tenant-update.input';

@ArgsType()
export class UpsertOneTenantArgs {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;

    @Field(() => TenantCreateInput, {nullable:false})
    @Type(() => TenantCreateInput)
    create!: TenantCreateInput;

    @Field(() => TenantUpdateInput, {nullable:false})
    @Type(() => TenantUpdateInput)
    update!: TenantUpdateInput;
}
