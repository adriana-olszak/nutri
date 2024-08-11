import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoginLogCountAggregate } from './login-log-count-aggregate.output';
import { LoginLogMinAggregate } from './login-log-min-aggregate.output';
import { LoginLogMaxAggregate } from './login-log-max-aggregate.output';

@ObjectType()
export class LoginLogGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Boolean, {nullable:false})
    success!: boolean;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => String, {nullable:true})
    userAgent?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LoginLogCountAggregate, {nullable:true})
    _count?: LoginLogCountAggregate;

    @Field(() => LoginLogMinAggregate, {nullable:true})
    _min?: LoginLogMinAggregate;

    @Field(() => LoginLogMaxAggregate, {nullable:true})
    _max?: LoginLogMaxAggregate;
}
