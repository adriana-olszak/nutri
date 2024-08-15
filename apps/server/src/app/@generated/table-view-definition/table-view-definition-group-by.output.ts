import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TableViewDefinitionCountAggregate } from './table-view-definition-count-aggregate.output';
import { TableViewDefinitionAvgAggregate } from './table-view-definition-avg-aggregate.output';
import { TableViewDefinitionSumAggregate } from './table-view-definition-sum-aggregate.output';
import { TableViewDefinitionMinAggregate } from './table-view-definition-min-aggregate.output';
import { TableViewDefinitionMaxAggregate } from './table-view-definition-max-aggregate.output';

@ObjectType()
export class TableViewDefinitionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    tableId!: string;

    @Field(() => String, {nullable:false})
    tableType!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    filters?: string;

    @Field(() => String, {nullable:true})
    sorting?: string;

    @Field(() => Boolean, {nullable:false})
    isPreset!: boolean;

    @Field(() => Boolean, {nullable:false})
    isShared!: boolean;

    @Field(() => TableViewDefinitionCountAggregate, {nullable:true})
    _count?: TableViewDefinitionCountAggregate;

    @Field(() => TableViewDefinitionAvgAggregate, {nullable:true})
    _avg?: TableViewDefinitionAvgAggregate;

    @Field(() => TableViewDefinitionSumAggregate, {nullable:true})
    _sum?: TableViewDefinitionSumAggregate;

    @Field(() => TableViewDefinitionMinAggregate, {nullable:true})
    _min?: TableViewDefinitionMinAggregate;

    @Field(() => TableViewDefinitionMaxAggregate, {nullable:true})
    _max?: TableViewDefinitionMaxAggregate;
}
