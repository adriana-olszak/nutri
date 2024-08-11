import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenWhereInput } from './password-reset-token-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPasswordResetTokenArgs {

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    where?: PasswordResetTokenWhereInput;
}
