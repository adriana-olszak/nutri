import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColumnViewWhereInput } from './column-view-where.input';
import { Type } from 'class-transformer';
import { ColumnViewOrderByWithAggregationInput } from './column-view-order-by-with-aggregation.input';
import { ColumnViewScalarFieldEnum } from './column-view-scalar-field.enum';
import { ColumnViewScalarWhereWithAggregatesInput } from './column-view-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ColumnViewCountAggregateInput } from './column-view-count-aggregate.input';
import { ColumnViewAvgAggregateInput } from './column-view-avg-aggregate.input';
import { ColumnViewSumAggregateInput } from './column-view-sum-aggregate.input';
import { ColumnViewMinAggregateInput } from './column-view-min-aggregate.input';
import { ColumnViewMaxAggregateInput } from './column-view-max-aggregate.input';

@ArgsType()
export class ColumnViewGroupByArgs {

    @Field(() => ColumnViewWhereInput, {nullable:true})
    @Type(() => ColumnViewWhereInput)
    where?: ColumnViewWhereInput;

    @Field(() => [ColumnViewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ColumnViewOrderByWithAggregationInput>;

    @Field(() => [ColumnViewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ColumnViewScalarFieldEnum>;

    @Field(() => ColumnViewScalarWhereWithAggregatesInput, {nullable:true})
    having?: ColumnViewScalarWhereWithAggregatesInput;

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
