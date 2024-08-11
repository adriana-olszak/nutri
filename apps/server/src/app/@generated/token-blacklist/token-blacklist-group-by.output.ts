import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TokenBlacklistCountAggregate } from './token-blacklist-count-aggregate.output';
import { TokenBlacklistMinAggregate } from './token-blacklist-min-aggregate.output';
import { TokenBlacklistMaxAggregate } from './token-blacklist-max-aggregate.output';

@ObjectType()
export class TokenBlacklistGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TokenBlacklistCountAggregate, {nullable:true})
    _count?: TokenBlacklistCountAggregate;

    @Field(() => TokenBlacklistMinAggregate, {nullable:true})
    _min?: TokenBlacklistMinAggregate;

    @Field(() => TokenBlacklistMaxAggregate, {nullable:true})
    _max?: TokenBlacklistMaxAggregate;
}
