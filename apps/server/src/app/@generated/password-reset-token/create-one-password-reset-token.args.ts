import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenCreateInput } from './password-reset-token-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePasswordResetTokenArgs {

    @Field(() => PasswordResetTokenCreateInput, {nullable:false})
    @Type(() => PasswordResetTokenCreateInput)
    data!: PasswordResetTokenCreateInput;
}
