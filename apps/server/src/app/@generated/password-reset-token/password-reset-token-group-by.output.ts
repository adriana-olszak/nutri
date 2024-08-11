import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PasswordResetTokenCountAggregate } from './password-reset-token-count-aggregate.output';
import { PasswordResetTokenMinAggregate } from './password-reset-token-min-aggregate.output';
import { PasswordResetTokenMaxAggregate } from './password-reset-token-max-aggregate.output';

@ObjectType()
export class PasswordResetTokenGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PasswordResetTokenCountAggregate, {nullable:true})
    _count?: PasswordResetTokenCountAggregate;

    @Field(() => PasswordResetTokenMinAggregate, {nullable:true})
    _min?: PasswordResetTokenMinAggregate;

    @Field(() => PasswordResetTokenMaxAggregate, {nullable:true})
    _max?: PasswordResetTokenMaxAggregate;
}
