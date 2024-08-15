import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TableViewDefinitionWhereInput } from './table-view-definition-where.input';
import { Type } from 'class-transformer';
import { TableViewDefinitionOrderByWithRelationInput } from './table-view-definition-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TableViewDefinitionWhereUniqueInput } from './table-view-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TableViewDefinitionCountAggregateInput } from './table-view-definition-count-aggregate.input';
import { TableViewDefinitionAvgAggregateInput } from './table-view-definition-avg-aggregate.input';
import { TableViewDefinitionSumAggregateInput } from './table-view-definition-sum-aggregate.input';
import { TableViewDefinitionMinAggregateInput } from './table-view-definition-min-aggregate.input';
import { TableViewDefinitionMaxAggregateInput } from './table-view-definition-max-aggregate.input';

@ArgsType()
export class TableViewDefinitionAggregateArgs {

    @Field(() => TableViewDefinitionWhereInput, {nullable:true})
    @Type(() => TableViewDefinitionWhereInput)
    where?: TableViewDefinitionWhereInput;

    @Field(() => [TableViewDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TableViewDefinitionOrderByWithRelationInput>;

    @Field(() => TableViewDefinitionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TableViewDefinitionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TableViewDefinitionCountAggregateInput, {nullable:true})
    _count?: TableViewDefinitionCountAggregateInput;

    @Field(() => TableViewDefinitionAvgAggregateInput, {nullable:true})
    _avg?: TableViewDefinitionAvgAggregateInput;

    @Field(() => TableViewDefinitionSumAggregateInput, {nullable:true})
    _sum?: TableViewDefinitionSumAggregateInput;

    @Field(() => TableViewDefinitionMinAggregateInput, {nullable:true})
    _min?: TableViewDefinitionMinAggregateInput;

    @Field(() => TableViewDefinitionMaxAggregateInput, {nullable:true})
    _max?: TableViewDefinitionMaxAggregateInput;
}
