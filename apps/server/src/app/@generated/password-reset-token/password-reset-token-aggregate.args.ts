import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordResetTokenWhereInput } from './password-reset-token-where.input';
import { Type } from 'class-transformer';
import { PasswordResetTokenOrderByWithRelationInput } from './password-reset-token-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInput } from './password-reset-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PasswordResetTokenCountAggregateInput } from './password-reset-token-count-aggregate.input';
import { PasswordResetTokenMinAggregateInput } from './password-reset-token-min-aggregate.input';
import { PasswordResetTokenMaxAggregateInput } from './password-reset-token-max-aggregate.input';

@ArgsType()
export class PasswordResetTokenAggregateArgs {

    @Field(() => PasswordResetTokenWhereInput, {nullable:true})
    @Type(() => PasswordResetTokenWhereInput)
    where?: PasswordResetTokenWhereInput;

    @Field(() => [PasswordResetTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordResetTokenOrderByWithRelationInput>;

    @Field(() => PasswordResetTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PasswordResetTokenWhereUniqueInput, 'id' | 'token'>;

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
