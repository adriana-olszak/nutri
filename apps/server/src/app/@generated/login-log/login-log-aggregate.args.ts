import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginLogWhereInput } from './login-log-where.input';
import { Type } from 'class-transformer';
import { LoginLogOrderByWithRelationInput } from './login-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LoginLogWhereUniqueInput } from './login-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoginLogCountAggregateInput } from './login-log-count-aggregate.input';
import { LoginLogMinAggregateInput } from './login-log-min-aggregate.input';
import { LoginLogMaxAggregateInput } from './login-log-max-aggregate.input';

@ArgsType()
export class LoginLogAggregateArgs {

    @Field(() => LoginLogWhereInput, {nullable:true})
    @Type(() => LoginLogWhereInput)
    where?: LoginLogWhereInput;

    @Field(() => [LoginLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoginLogOrderByWithRelationInput>;

    @Field(() => LoginLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LoginLogWhereUniqueInput, 'id'>;

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
