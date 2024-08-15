import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TableViewDefinitionCountAggregate } from './table-view-definition-count-aggregate.output';
import { TableViewDefinitionAvgAggregate } from './table-view-definition-avg-aggregate.output';
import { TableViewDefinitionSumAggregate } from './table-view-definition-sum-aggregate.output';
import { TableViewDefinitionMinAggregate } from './table-view-definition-min-aggregate.output';
import { TableViewDefinitionMaxAggregate } from './table-view-definition-max-aggregate.output';

@ObjectType()
export class AggregateTableViewDefinition {

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
