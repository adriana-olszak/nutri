import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPasswordResetTokensInput } from './user-create-without-password-reset-tokens.input';

@InputType()
export class UserCreateOrConnectWithoutPasswordResetTokensInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'googleId'>;

    @Field(() => UserCreateWithoutPasswordResetTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutPasswordResetTokensInput)
    create!: UserCreateWithoutPasswordResetTokensInput;
}
