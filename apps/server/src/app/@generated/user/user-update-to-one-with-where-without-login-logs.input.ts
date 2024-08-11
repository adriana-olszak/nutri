import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLoginLogsInput } from './user-update-without-login-logs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLoginLogsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLoginLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLoginLogsInput)
    data!: UserUpdateWithoutLoginLogsInput;
}
