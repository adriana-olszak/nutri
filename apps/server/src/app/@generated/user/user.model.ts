import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Roles } from '../prisma/roles.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { RefreshToken } from '../refresh-token/refresh-token.model';
import { Session } from '../session/session.model';
import { LoginLog } from '../login-log/login-log.model';
import { PasswordResetToken } from '../password-reset-token/password-reset-token.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => [Roles], {nullable:true})
    roles!: Array<keyof typeof Roles>;

    @Field(() => String, {nullable:true})
    googleId!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    googleProfile!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RefreshToken], {nullable:true})
    refreshTokens?: Array<RefreshToken>;

    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;

    @Field(() => [LoginLog], {nullable:true})
    loginLogs?: Array<LoginLog>;

    @Field(() => [PasswordResetToken], {nullable:true})
    passwordResetTokens?: Array<PasswordResetToken>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
