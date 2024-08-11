import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PasswordResetTokenCountOrderByAggregateInput } from './password-reset-token-count-order-by-aggregate.input';
import { PasswordResetTokenMaxOrderByAggregateInput } from './password-reset-token-max-order-by-aggregate.input';
import { PasswordResetTokenMinOrderByAggregateInput } from './password-reset-token-min-order-by-aggregate.input';

@InputType()
export class PasswordResetTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PasswordResetTokenCountOrderByAggregateInput, {nullable:true})
    _count?: PasswordResetTokenCountOrderByAggregateInput;

    @Field(() => PasswordResetTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: PasswordResetTokenMaxOrderByAggregateInput;

    @Field(() => PasswordResetTokenMinOrderByAggregateInput, {nullable:true})
    _min?: PasswordResetTokenMinOrderByAggregateInput;
}
