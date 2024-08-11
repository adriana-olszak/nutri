import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenWhereInput } from './password-reset-token-where.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenOrderByWithAggregationInput } from './password-reset-token-order-by-with-aggregation.input';
import { PasswordResetTokenScalarFieldEnum } from './password-reset-token-scalar-field.enum';
import { PasswordResetTokenScalarWhereWithAggregatesInput } from './password-reset-token-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PasswordResetTokenCountAggregateInput } from './password-reset-token-count-aggregate.input';
import { PasswordResetTokenMinAggregateInput } from './password-reset-token-min-aggregate.input';
import { PasswordResetTokenMaxAggregateInput } from './password-reset-token-max-aggregate.input';

@ArgsType()
export class PasswordResetTokenGroupByArgs {

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    where?: PasswordResetTokenWhereInput;

    @Field(() => [PasswordResetTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithAggregationInput>;

    @Field(() => [PasswordResetTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PasswordResetTokenScalarFieldEnum>;

    @Field(() => PasswordResetTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: PasswordResetTokenScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PasswordResetTokenCountAggregateInput, {nullable:true})
    _count?: PasswordResetTokenCountAggregateInput;

    @Field(() => PasswordResetTokenMinAggregateInput, {nullable:true})
    _min?: PasswordResetTokenMinAggregateInput;

    @Field(() => PasswordResetTokenMaxAggregateInput, {nullable:true})
    _max?: PasswordResetTokenMaxAggregateInput;
}
