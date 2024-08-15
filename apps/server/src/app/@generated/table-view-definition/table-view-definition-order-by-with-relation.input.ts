import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ColumnViewOrderByRelationAggregateInput } from '../column-view/column-view-order-by-relation-aggregate.input';

@InputType()
export class TableViewDefinitionOrderByWithRelationInput {

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

    @Field(() => ColumnViewOrderByRelationAggregateInput, {nullable:true})
    ColumnView?: ColumnViewOrderByRelationAggregateInput;
}
