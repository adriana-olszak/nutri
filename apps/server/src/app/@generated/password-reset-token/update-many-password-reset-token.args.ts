import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenUpdateManyMutationInput } from './password-reset-token-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenWhereInput } from './password-reset-token-where.input';

@ArgsType()
export class UpdateManyPasswordResetTokenArgs {

    @Field(() => PasswordResetTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => PasswordResetTokenUpdateManyMutationInput)
    data!: PasswordResetTokenUpdateManyMutationInput;

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    where?: PasswordResetTokenWhereInput;
}
