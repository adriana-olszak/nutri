import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenCreateInput } from './password-reset-token-create.input';
import { PasswordResetTokenUpdateInput } from './password-reset-token-update.input';

@ArgsType()
export class UpsertOnePasswordResetTokenArgs {

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordResetTokenWhereUniqueInput)
    where!: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;

    @Field(() => PasswordResetTokenCreateInput, {nullable:false})
    @Type(() => PasswordResetTokenCreateInput)
    create!: PasswordResetTokenCreateInput;

    @Field(() => PasswordResetTokenUpdateInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateInput)
    update!: PasswordResetTokenUpdateInput;
}
