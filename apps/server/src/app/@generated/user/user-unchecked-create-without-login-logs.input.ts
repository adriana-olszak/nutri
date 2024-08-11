import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { GraphQLJSON } from 'graphql-type-json';
import { RefreshTokenUncheckedCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-unchecked-create-nested-many-without-user.input';
import { SessionUncheckedCreateNestedManyWithoutUserInput } from '../session/session-unchecked-create-nested-many-without-user.input';
import { PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput } from '../password-reset-token/password-reset-token-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutLoginLogsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => UserCreaterolesInput, {nullable:true})
    roles?: UserCreaterolesInput;

    @Field(() => String, {nullable:true})
    googleId?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    googleProfile?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput;
}
