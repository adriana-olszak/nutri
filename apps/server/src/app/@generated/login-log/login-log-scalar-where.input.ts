import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LoginLogScalarWhereInput {

    @Field(() => [LoginLogScalarWhereInput], {nullable:true})
    AND?: Array<LoginLogScalarWhereInput>;

    @Field(() => [LoginLogScalarWhereInput], {nullable:true})
    OR?: Array<LoginLogScalarWhereInput>;

    @Field(() => [LoginLogScalarWhereInput], {nullable:true})
    NOT?: Array<LoginLogScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
