import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSessionsInput } from './user-update-without-sessions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSessionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionsInput)
    data!: UserUpdateWithoutSessionsInput;
}
