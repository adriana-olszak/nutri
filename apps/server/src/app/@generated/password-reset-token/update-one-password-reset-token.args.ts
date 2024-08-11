import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenUpdateInput } from './password-reset-token-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';

@ArgsType()
export class UpdateOnePasswordResetTokenArgs {

    @Field(() => PasswordResetTokenUpdateInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateInput)
    data!: PasswordResetTokenUpdateInput;

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;
}
