import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLoginLogsInput } from './user-create-without-login-logs.input';

@InputType()
export class UserCreateOrConnectWithoutLoginLogsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserCreateWithoutLoginLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutLoginLogsInput)
    create!: UserCreateWithoutLoginLogsInput;
}
