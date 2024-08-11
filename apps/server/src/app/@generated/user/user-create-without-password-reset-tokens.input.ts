import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { GraphQLJSON } from 'graphql-type-json';
import { RefreshTokenCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-create-nested-many-without-user.input';
import { SessionCreateNestedManyWithoutUserInput } from '../session/session-create-nested-many-without-user.input';
import { LoginLogCreateNestedManyWithoutUserInput } from '../login-log/login-log-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutPasswordResetTokensInput {

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

    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;

    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: SessionCreateNestedManyWithoutUserInput;

    @Field(() => LoginLogCreateNestedManyWithoutUserInput, {nullable:true})
    loginLogs?: LoginLogCreateNestedManyWithoutUserInput;
}
