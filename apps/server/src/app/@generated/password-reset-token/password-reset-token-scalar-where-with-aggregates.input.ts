import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PasswordResetTokenScalarWhereWithAggregatesInput {

    @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;

    @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;

    @Field(() => [PasswordResetTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PasswordResetTokenScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
