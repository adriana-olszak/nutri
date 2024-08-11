import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TokenBlacklistScalarWhereWithAggregatesInput {

    @Field(() => [TokenBlacklistScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TokenBlacklistScalarWhereWithAggregatesInput>;

    @Field(() => [TokenBlacklistScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TokenBlacklistScalarWhereWithAggregatesInput>;

    @Field(() => [TokenBlacklistScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TokenBlacklistScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
