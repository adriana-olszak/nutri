import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ColumnViewCountOrderByAggregateInput } from './column-view-count-order-by-aggregate.input';
import { ColumnViewAvgOrderByAggregateInput } from './column-view-avg-order-by-aggregate.input';
import { ColumnViewMaxOrderByAggregateInput } from './column-view-max-order-by-aggregate.input';
import { ColumnViewMinOrderByAggregateInput } from './column-view-min-order-by-aggregate.input';
import { ColumnViewSumOrderByAggregateInput } from './column-view-sum-order-by-aggregate.input';

@InputType()
export class ColumnViewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    columnId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    columnType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visible?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    filter?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tableViewDefinitionId?: keyof typeof SortOrder;

    @Field(() => ColumnViewCountOrderByAggregateInput, {nullable:true})
    _count?: ColumnViewCountOrderByAggregateInput;

    @Field(() => ColumnViewAvgOrderByAggregateInput, {nullable:true})
    _avg?: ColumnViewAvgOrderByAggregateInput;

    @Field(() => ColumnViewMaxOrderByAggregateInput, {nullable:true})
    _max?: ColumnViewMaxOrderByAggregateInput;

    @Field(() => ColumnViewMinOrderByAggregateInput, {nullable:true})
    _min?: ColumnViewMinOrderByAggregateInput;

    @Field(() => ColumnViewSumOrderByAggregateInput, {nullable:true})
    _sum?: ColumnViewSumOrderByAggregateInput;
}
