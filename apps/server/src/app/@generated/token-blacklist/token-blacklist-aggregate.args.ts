import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistWhereInput } from './token-blacklist-where.input';
import { Type } from 'class-transformer';
import { TokenBlacklistOrderByWithRelationInput } from './token-blacklist-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TokenBlacklistWhereUniqueInput } from './token-blacklist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokenBlacklistCountAggregateInput } from './token-blacklist-count-aggregate.input';
import { TokenBlacklistMinAggregateInput } from './token-blacklist-min-aggregate.input';
import { TokenBlacklistMaxAggregateInput } from './token-blacklist-max-aggregate.input';

@ArgsType()
export class TokenBlacklistAggregateArgs {

    @Field(() => TokenBlacklistWhereInput, {nullable:true})
    @Type(() => TokenBlacklistWhereInput)
    where?: TokenBlacklistWhereInput;

    @Field(() => [TokenBlacklistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TokenBlacklistOrderByWithRelationInput>;

    @Field(() => TokenBlacklistWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TokenBlacklistWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TokenBlacklistCountAggregateInput, {nullable:true})
    _count?: TokenBlacklistCountAggregateInput;

    @Field(() => TokenBlacklistMinAggregateInput, {nullable:true})
    _min?: TokenBlacklistMinAggregateInput;

    @Field(() => TokenBlacklistMaxAggregateInput, {nullable:true})
    _max?: TokenBlacklistMaxAggregateInput;
}
