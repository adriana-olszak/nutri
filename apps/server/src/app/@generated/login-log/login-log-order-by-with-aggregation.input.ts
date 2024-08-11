import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LoginLogCountOrderByAggregateInput } from './login-log-count-order-by-aggregate.input';
import { LoginLogMaxOrderByAggregateInput } from './login-log-max-order-by-aggregate.input';
import { LoginLogMinOrderByAggregateInput } from './login-log-min-order-by-aggregate.input';

@InputType()
export class LoginLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    success?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ipAddress?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userAgent?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LoginLogCountOrderByAggregateInput, {nullable:true})
    _count?: LoginLogCountOrderByAggregateInput;

    @Field(() => LoginLogMaxOrderByAggregateInput, {nullable:true})
    _max?: LoginLogMaxOrderByAggregateInput;

    @Field(() => LoginLogMinOrderByAggregateInput, {nullable:true})
    _min?: LoginLogMinOrderByAggregateInput;
}
