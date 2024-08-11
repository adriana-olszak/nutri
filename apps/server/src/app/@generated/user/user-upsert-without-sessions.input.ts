import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSessionsInput } from './user-update-without-sessions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSessionsInput {

    @Field(() => UserUpdateWithoutSessionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSessionsInput)
    update!: UserUpdateWithoutSessionsInput;

    @Field(() => UserCreateWithoutSessionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSessionsInput)
    create!: UserCreateWithoutSessionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
