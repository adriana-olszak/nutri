import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginLogWhereInput } from './login-log-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class LoginLogWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [LoginLogWhereInput], {nullable:true})
    AND?: Array<LoginLogWhereInput>;

    @Field(() => [LoginLogWhereInput], {nullable:true})
    OR?: Array<LoginLogWhereInput>;

    @Field(() => [LoginLogWhereInput], {nullable:true})
    NOT?: Array<LoginLogWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    success?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ipAddress?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userAgent?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    user?: UserNullableRelationFilter;
}
