import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenUpdateWithoutUserInput } from './password-reset-token-update-without-user.input';
import { PasswordResetTokenCreateWithoutUserInput } from './password-reset-token-create-without-user.input';

@InputType()
export class PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => PasswordResetTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateWithoutUserInput)
    update!: PasswordResetTokenUpdateWithoutUserInput;

    @Field(() => PasswordResetTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => PasswordResetTokenCreateWithoutUserInput)
    create!: PasswordResetTokenCreateWithoutUserInput;
}
