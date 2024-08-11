import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenCreateWithoutUserInput } from './password-reset-token-create-without-user.input';

@InputType()
export class PasswordResetTokenCreateOrConnectWithoutUserInput {

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => PasswordResetTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => PasswordResetTokenCreateWithoutUserInput)
    create!: PasswordResetTokenCreateWithoutUserInput;
}
