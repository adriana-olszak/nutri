import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SessionCountOrderByAggregateInput } from './session-count-order-by-aggregate.input';
import { SessionMaxOrderByAggregateInput } from './session-max-order-by-aggregate.input';
import { SessionMinOrderByAggregateInput } from './session-min-order-by-aggregate.input';

@InputType()
export class SessionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deviceInfo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ipAddress?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    lastActiveAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SessionCountOrderByAggregateInput, {nullable:true})
    _count?: SessionCountOrderByAggregateInput;

    @Field(() => SessionMaxOrderByAggregateInput, {nullable:true})
    _max?: SessionMaxOrderByAggregateInput;

    @Field(() => SessionMinOrderByAggregateInput, {nullable:true})
    _min?: SessionMinOrderByAggregateInput;
}
