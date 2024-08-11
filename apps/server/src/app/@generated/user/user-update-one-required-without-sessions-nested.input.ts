import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSessionsInput } from './user-create-or-connect-without-sessions.input';
import { UserUpsertWithoutSessionsInput } from './user-upsert-without-sessions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSessionsInput } from './user-update-to-one-with-where-without-sessions.input';

@InputType()
export class UserUpdateOneRequiredWithoutSessionsNestedInput {

    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionsInput)
    create?: UserCreateWithoutSessionsInput;

    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;

    @Field(() => UserUpsertWithoutSessionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSessionsInput)
    upsert?: UserUpsertWithoutSessionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSessionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSessionsInput)
    update?: UserUpdateToOneWithWhereWithoutSessionsInput;
}
