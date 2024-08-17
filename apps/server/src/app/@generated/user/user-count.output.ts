import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    refreshTokens?: number;

    @Field(() => Int, {nullable:false})
    sessions?: number;

    @Field(() => Int, {nullable:false})
    loginLogs?: number;

    @Field(() => Int, {nullable:false})
    passwordResetTokens?: number;

    @Field(() => Int, {nullable:false})
    submissions?: number;
}
