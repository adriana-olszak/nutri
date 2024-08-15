import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ColumnViewCountAggregate } from './column-view-count-aggregate.output';
import { ColumnViewAvgAggregate } from './column-view-avg-aggregate.output';
import { ColumnViewSumAggregate } from './column-view-sum-aggregate.output';
import { ColumnViewMinAggregate } from './column-view-min-aggregate.output';
import { ColumnViewMaxAggregate } from './column-view-max-aggregate.output';

@ObjectType()
export class ColumnViewGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    columnId!: number;

    @Field(() => String, {nullable:false})
    columnType!: string;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Boolean, {nullable:false})
    visible!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    filter?: string;

    @Field(() => String, {nullable:false})
    tableViewDefinitionId!: string;

    @Field(() => ColumnViewCountAggregate, {nullable:true})
    _count?: ColumnViewCountAggregate;

    @Field(() => ColumnViewAvgAggregate, {nullable:true})
    _avg?: ColumnViewAvgAggregate;

    @Field(() => ColumnViewSumAggregate, {nullable:true})
    _sum?: ColumnViewSumAggregate;

    @Field(() => ColumnViewMinAggregate, {nullable:true})
    _min?: ColumnViewMinAggregate;

    @Field(() => ColumnViewMaxAggregate, {nullable:true})
    _max?: ColumnViewMaxAggregate;
}
