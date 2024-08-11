import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLoginLogsInput } from './user-create-without-login-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLoginLogsInput } from './user-create-or-connect-without-login-logs.input';
import { UserUpsertWithoutLoginLogsInput } from './user-upsert-without-login-logs.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLoginLogsInput } from './user-update-to-one-with-where-without-login-logs.input';

@InputType()
export class UserUpdateOneWithoutLoginLogsNestedInput {

    @Field(() => UserCreateWithoutLoginLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutLoginLogsInput)
    create?: UserCreateWithoutLoginLogsInput;

    @Field(() => UserCreateOrConnectWithoutLoginLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLoginLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLoginLogsInput;

    @Field(() => UserUpsertWithoutLoginLogsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLoginLogsInput)
    upsert?: UserUpsertWithoutLoginLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLoginLogsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLoginLogsInput)
    update?: UserUpdateToOneWithWhereWithoutLoginLogsInput;
}
