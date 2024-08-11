import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPasswordResetTokensInput } from './user-update-without-password-reset-tokens.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPasswordResetTokensInput } from './user-create-without-password-reset-tokens.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPasswordResetTokensInput {

    @Field(() => UserUpdateWithoutPasswordResetTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutPasswordResetTokensInput)
    update!: UserUpdateWithoutPasswordResetTokensInput;

    @Field(() => UserCreateWithoutPasswordResetTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutPasswordResetTokensInput)
    create!: UserCreateWithoutPasswordResetTokensInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
