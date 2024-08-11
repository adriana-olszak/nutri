import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TokenBlacklistCountOrderByAggregateInput } from './token-blacklist-count-order-by-aggregate.input';
import { TokenBlacklistMaxOrderByAggregateInput } from './token-blacklist-max-order-by-aggregate.input';
import { TokenBlacklistMinOrderByAggregateInput } from './token-blacklist-min-order-by-aggregate.input';

@InputType()
export class TokenBlacklistOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TokenBlacklistCountOrderByAggregateInput, {nullable:true})
    _count?: TokenBlacklistCountOrderByAggregateInput;

    @Field(() => TokenBlacklistMaxOrderByAggregateInput, {nullable:true})
    _max?: TokenBlacklistMaxOrderByAggregateInput;

    @Field(() => TokenBlacklistMinOrderByAggregateInput, {nullable:true})
    _min?: TokenBlacklistMinOrderByAggregateInput;
}
