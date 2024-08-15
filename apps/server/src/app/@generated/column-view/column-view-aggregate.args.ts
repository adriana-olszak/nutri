import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewWhereInput } from './column-view-where.input';
import { Type } from 'class-transformer';
import { ColumnViewOrderByWithRelationInput } from './column-view-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ColumnViewWhereUniqueInput } from './column-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ColumnViewCountAggregateInput } from './column-view-count-aggregate.input';
import { ColumnViewAvgAggregateInput } from './column-view-avg-aggregate.input';
import { ColumnViewSumAggregateInput } from './column-view-sum-aggregate.input';
import { ColumnViewMinAggregateInput } from './column-view-min-aggregate.input';
import { ColumnViewMaxAggregateInput } from './column-view-max-aggregate.input';

@ArgsType()
export class ColumnViewAggregateArgs {

    @Field(() => ColumnViewWhereInput, {nullable:true})
    @Type(() => ColumnViewWhereInput)
    where?: ColumnViewWhereInput;

    @Field(() => [ColumnViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ColumnViewOrderByWithRelationInput>;

    @Field(() => ColumnViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ColumnViewWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ColumnViewCountAggregateInput, {nullable:true})
    _count?: ColumnViewCountAggregateInput;

    @Field(() => ColumnViewAvgAggregateInput, {nullable:true})
    _avg?: ColumnViewAvgAggregateInput;

    @Field(() => ColumnViewSumAggregateInput, {nullable:true})
    _sum?: ColumnViewSumAggregateInput;

    @Field(() => ColumnViewMinAggregateInput, {nullable:true})
    _min?: ColumnViewMinAggregateInput;

    @Field(() => ColumnViewMaxAggregateInput, {nullable:true})
    _max?: ColumnViewMaxAggregateInput;
}
