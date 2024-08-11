import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSessionsInput } from './user-create-or-connect-without-sessions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSessionsInput {

    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSessionsInput)
    create?: UserCreateWithoutSessionsInput;

    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;
}
