import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenBlacklistWhereInput } from './token-blacklist-where.input';
import { Type } from 'class-transformer';
import { TokenBlacklistOrderByWithAggregationInput } from './token-blacklist-order-by-with-aggregation.input';
import { TokenBlacklistScalarFieldEnum } from './token-blacklist-scalar-field.enum';
import { TokenBlacklistScalarWhereWithAggregatesInput } from './token-blacklist-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TokenBlacklistCountAggregateInput } from './token-blacklist-count-aggregate.input';
import { TokenBlacklistMinAggregateInput } from './token-blacklist-min-aggregate.input';
import { TokenBlacklistMaxAggregateInput } from './token-blacklist-max-aggregate.input';

@ArgsType()
export class TokenBlacklistGroupByArgs {

    @Field(() => TokenBlacklistWhereInput, {nullable:true})
    @Type(() => TokenBlacklistWhereInput)
    where?: TokenBlacklistWhereInput;

    @Field(() => [TokenBlacklistOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TokenBlacklistOrderByWithAggregationInput>;

    @Field(() => [TokenBlacklistScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TokenBlacklistScalarFieldEnum>;

    @Field(() => TokenBlacklistScalarWhereWithAggregatesInput, {nullable:true})
    having?: TokenBlacklistScalarWhereWithAggregatesInput;

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
