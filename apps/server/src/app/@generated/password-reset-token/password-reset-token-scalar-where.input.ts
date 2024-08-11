import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PasswordResetTokenScalarWhereInput {

    @Field(() => [PasswordResetTokenScalarWhereInput], {nullable:true})
    AND?: Array<PasswordResetTokenScalarWhereInput>;

    @Field(() => [PasswordResetTokenScalarWhereInput], {nullable:true})
    OR?: Array<PasswordResetTokenScalarWhereInput>;

    @Field(() => [PasswordResetTokenScalarWhereInput], {nullable:true})
    NOT?: Array<PasswordResetTokenScalarWhereInput>;

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
}
