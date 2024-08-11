import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RefreshTokenOrderByRelationAggregateInput } from '../refresh-token/refresh-token-order-by-relation-aggregate.input';
import { SessionOrderByRelationAggregateInput } from '../session/session-order-by-relation-aggregate.input';
import { LoginLogOrderByRelationAggregateInput } from '../login-log/login-log-order-by-relation-aggregate.input';
import { PasswordResetTokenOrderByRelationAggregateInput } from '../password-reset-token/password-reset-token-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    password?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    roles?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    googleId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    googleProfile?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RefreshTokenOrderByRelationAggregateInput, {nullable:true})
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput;

    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: SessionOrderByRelationAggregateInput;

    @Field(() => LoginLogOrderByRelationAggregateInput, {nullable:true})
    loginLogs?: LoginLogOrderByRelationAggregateInput;

    @Field(() => PasswordResetTokenOrderByRelationAggregateInput, {nullable:true})
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput;
}
