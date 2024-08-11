import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPasswordResetTokensInput } from './user-update-without-password-reset-tokens.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPasswordResetTokensInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPasswordResetTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutPasswordResetTokensInput)
    data!: UserUpdateWithoutPasswordResetTokensInput;
}
