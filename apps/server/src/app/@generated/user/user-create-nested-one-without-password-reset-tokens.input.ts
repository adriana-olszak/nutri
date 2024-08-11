import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPasswordResetTokensInput } from './user-create-without-password-reset-tokens.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPasswordResetTokensInput } from './user-create-or-connect-without-password-reset-tokens.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPasswordResetTokensInput {

    @Field(() => UserCreateWithoutPasswordResetTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutPasswordResetTokensInput)
    create?: UserCreateWithoutPasswordResetTokensInput;

    @Field(() => UserCreateOrConnectWithoutPasswordResetTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPasswordResetTokensInput)
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;
}
