import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLoginLogsInput } from './user-update-without-login-logs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLoginLogsInput } from './user-create-without-login-logs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLoginLogsInput {

    @Field(() => UserUpdateWithoutLoginLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLoginLogsInput)
    update!: UserUpdateWithoutLoginLogsInput;

    @Field(() => UserCreateWithoutLoginLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutLoginLogsInput)
    create!: UserCreateWithoutLoginLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
