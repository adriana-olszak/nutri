import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenBlacklistWhereInput } from './token-blacklist-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenBlacklistWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => [TokenBlacklistWhereInput], {nullable:true})
    AND?: Array<TokenBlacklistWhereInput>;

    @Field(() => [TokenBlacklistWhereInput], {nullable:true})
    OR?: Array<TokenBlacklistWhereInput>;

    @Field(() => [TokenBlacklistWhereInput], {nullable:true})
    NOT?: Array<TokenBlacklistWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
