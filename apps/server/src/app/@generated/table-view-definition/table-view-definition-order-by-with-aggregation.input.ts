import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TableViewDefinitionCountOrderByAggregateInput } from './table-view-definition-count-order-by-aggregate.input';
import { TableViewDefinitionAvgOrderByAggregateInput } from './table-view-definition-avg-order-by-aggregate.input';
import { TableViewDefinitionMaxOrderByAggregateInput } from './table-view-definition-max-order-by-aggregate.input';
import { TableViewDefinitionMinOrderByAggregateInput } from './table-view-definition-min-order-by-aggregate.input';
import { TableViewDefinitionSumOrderByAggregateInput } from './table-view-definition-sum-order-by-aggregate.input';

@InputType()
export class TableViewDefinitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tableId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tableType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    icon?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    filters?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sorting?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPreset?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isShared?: keyof typeof SortOrder;

    @Field(() => TableViewDefinitionCountOrderByAggregateInput, {nullable:true})
    _count?: TableViewDefinitionCountOrderByAggregateInput;

    @Field(() => TableViewDefinitionAvgOrderByAggregateInput, {nullable:true})
    _avg?: TableViewDefinitionAvgOrderByAggregateInput;

    @Field(() => TableViewDefinitionMaxOrderByAggregateInput, {nullable:true})
    _max?: TableViewDefinitionMaxOrderByAggregateInput;

    @Field(() => TableViewDefinitionMinOrderByAggregateInput, {nullable:true})
    _min?: TableViewDefinitionMinOrderByAggregateInput;

    @Field(() => TableViewDefinitionSumOrderByAggregateInput, {nullable:true})
    _sum?: TableViewDefinitionSumOrderByAggregateInput;
}
