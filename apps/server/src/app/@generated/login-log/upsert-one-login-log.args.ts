import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';
import { Type } from 'class-transformer';
import { LoginLogCreateInput } from './login-log-create.input';
import { LoginLogUpdateInput } from './login-log-update.input';

@ArgsType()
export class UpsertOneLoginLogArgs {

    @Field(() => LoginLogWhereUniqueInput, {nullable:false})
    @Type(() => LoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>;

    @Field(() => LoginLogCreateInput, {nullable:false})
    @Type(() => LoginLogCreateInput)
    create!: LoginLogCreateInput;

    @Field(() => LoginLogUpdateInput, {nullable:false})
    @Type(() => LoginLogUpdateInput)
    update!: LoginLogUpdateInput;
}
