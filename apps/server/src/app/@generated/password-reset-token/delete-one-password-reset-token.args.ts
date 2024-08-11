import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePasswordResetTokenArgs {

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;
}
