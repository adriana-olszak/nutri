import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenBlacklistWhereInput {

    @Field(() => [TokenBlacklistWhereInput], {nullable:true})
    AND?: Array<TokenBlacklistWhereInput>;

    @Field(() => [TokenBlacklistWhereInput], {nullable:true})
    OR?: Array<TokenBlacklistWhereInput>;

    @Field(() => [TokenBlacklistWhereInput], {nullable:true})
    NOT?: Array<TokenBlacklistWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
