import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRolesNullableListFilter } from '../prisma/enum-roles-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RefreshTokenListRelationFilter } from '../refresh-token/refresh-token-list-relation-filter.input';
import { SessionListRelationFilter } from '../session/session-list-relation-filter.input';
import { LoginLogListRelationFilter } from '../login-log/login-log-list-relation-filter.input';
import { PasswordResetTokenListRelationFilter } from '../password-reset-token/password-reset-token-list-relation-filter.input';
import { SubmissionListRelationFilter } from '../submission/submission-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    googleId?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => EnumRolesNullableListFilter, {nullable:true})
    roles?: EnumRolesNullableListFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    googleProfile?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    refreshTokens?: RefreshTokenListRelationFilter;

    @Field(() => SessionListRelationFilter, {nullable:true})
    sessions?: SessionListRelationFilter;

    @Field(() => LoginLogListRelationFilter, {nullable:true})
    loginLogs?: LoginLogListRelationFilter;

    @Field(() => PasswordResetTokenListRelationFilter, {nullable:true})
    passwordResetTokens?: PasswordResetTokenListRelationFilter;

    @Field(() => SubmissionListRelationFilter, {nullable:true})
    submissions?: SubmissionListRelationFilter;
}
