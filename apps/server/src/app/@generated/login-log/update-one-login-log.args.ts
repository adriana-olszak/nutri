import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogUpdateInput } from './login-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';

@ArgsType()
export class UpdateOneLoginLogArgs {

    @Field(() => LoginLogUpdateInput, {nullable:false})
    @Type(() => LoginLogUpdateInput)
    data!: LoginLogUpdateInput;

    @Field(() => LoginLogWhereUniqueInput, {nullable:false})
    @Type(() => LoginLogWhereUniqueInput)
    where!: Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>;
}
