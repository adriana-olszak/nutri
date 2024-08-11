import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPasswordResetTokensInput } from './user-create-without-password-reset-tokens.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPasswordResetTokensInput } from './user-create-or-connect-without-password-reset-tokens.input';
import { UserUpsertWithoutPasswordResetTokensInput } from './user-upsert-without-password-reset-tokens.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPasswordResetTokensInput } from './user-update-to-one-with-where-without-password-reset-tokens.input';

@InputType()
export class UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput {

    @Field(() => UserCreateWithoutPasswordResetTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutPasswordResetTokensInput)
    create?: UserCreateWithoutPasswordResetTokensInput;

    @Field(() => UserCreateOrConnectWithoutPasswordResetTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPasswordResetTokensInput)
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput;

    @Field(() => UserUpsertWithoutPasswordResetTokensInput, {nullable:true})
    @Type(() => UserUpsertWithoutPasswordResetTokensInput)
    upsert?: UserUpsertWithoutPasswordResetTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPasswordResetTokensInput)
    update?: UserUpdateToOneWithWhereWithoutPasswordResetTokensInput;
}
