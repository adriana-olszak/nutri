import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenUpdateWithoutUserInput } from './password-reset-token-update-without-user.input';

@InputType()
export class PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => PasswordResetTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateWithoutUserInput)
    data!: PasswordResetTokenUpdateWithoutUserInput;
}
