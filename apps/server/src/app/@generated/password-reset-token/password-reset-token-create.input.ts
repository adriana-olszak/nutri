import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPasswordResetTokensInput } from '../user/user-create-nested-one-without-password-reset-tokens.input';

@InputType()
export class PasswordResetTokenCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPasswordResetTokensInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPasswordResetTokensInput;
}
