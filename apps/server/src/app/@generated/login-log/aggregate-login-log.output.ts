import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoginLogCountAggregate } from './login-log-count-aggregate.output';
import { LoginLogMinAggregate } from './login-log-min-aggregate.output';
import { LoginLogMaxAggregate } from './login-log-max-aggregate.output';

@ObjectType()
export class AggregateLoginLog {

    @Field(() => LoginLogCountAggregate, {nullable:true})
    _count?: LoginLogCountAggregate;

    @Field(() => LoginLogMinAggregate, {nullable:true})
    _min?: LoginLogMinAggregate;

    @Field(() => LoginLogMaxAggregate, {nullable:true})
    _max?: LoginLogMaxAggregate;
}
