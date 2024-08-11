import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordResetTokenWhereInput } from './password-reset-token-where.input';

@InputType()
export class PasswordResetTokenListRelationFilter {

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    every?: PasswordResetTokenWhereInput;

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    some?: PasswordResetTokenWhereInput;

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    none?: PasswordResetTokenWhereInput;
}
