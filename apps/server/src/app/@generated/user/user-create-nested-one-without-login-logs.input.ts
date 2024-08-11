import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLoginLogsInput } from './user-create-without-login-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLoginLogsInput } from './user-create-or-connect-without-login-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLoginLogsInput {

    @Field(() => UserCreateWithoutLoginLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutLoginLogsInput)
    create?: UserCreateWithoutLoginLogsInput;

    @Field(() => UserCreateOrConnectWithoutLoginLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLoginLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLoginLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;
}
