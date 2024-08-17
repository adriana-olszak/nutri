import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantUpdateInput } from './tenant-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@ArgsType()
export class UpdateOneTenantArgs {

    @Field(() => TenantUpdateInput, {nullable:false})
    @Type(() => TenantUpdateInput)
    data!: TenantUpdateInput;

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;
}
