import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogWhereInput } from './login-log-where.input';
import { Type } from 'class-transformer';
import { LoginLogOrderByWithAggregationInput } from './login-log-order-by-with-aggregation.input';
import { LoginLogScalarFieldEnum } from './login-log-scalar-field.enum';
import { LoginLogScalarWhereWithAggregatesInput } from './login-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LoginLogCountAggregateInput } from './login-log-count-aggregate.input';
import { LoginLogMinAggregateInput } from './login-log-min-aggregate.input';
import { LoginLogMaxAggregateInput } from './login-log-max-aggregate.input';

@ArgsType()
export class LoginLogGroupByArgs {

    @Field(() => LoginLogWhereInput, {nullable:true})
    @Type(() => LoginLogWhereInput)
    where?: LoginLogWhereInput;

    @Field(() => [LoginLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LoginLogOrderByWithAggregationInput>;

    @Field(() => [LoginLogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LoginLogScalarFieldEnum>;

    @Field(() => LoginLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: LoginLogScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LoginLogCountAggregateInput, {nullable:true})
    _count?: LoginLogCountAggregateInput;

    @Field(() => LoginLogMinAggregateInput, {nullable:true})
    _min?: LoginLogMinAggregateInput;

    @Field(() => LoginLogMaxAggregateInput, {nullable:true})
    _max?: LoginLogMaxAggregateInput;
}
