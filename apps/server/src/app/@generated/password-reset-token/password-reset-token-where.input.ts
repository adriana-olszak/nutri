import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PasswordResetTokenWhereInput {

    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    AND?: Array<PasswordResetTokenWhereInput>;

    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    OR?: Array<PasswordResetTokenWhereInput>;

    @Field(() => [PasswordResetTokenWhereInput], {nullable:true})
    NOT?: Array<PasswordResetTokenWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
