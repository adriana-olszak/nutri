import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TableViewDefinitionOrderByWithRelationInput } from '../table-view-definition/table-view-definition-order-by-with-relation.input';

@InputType()
export class ColumnViewOrderByWithRelationInput {

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

    @Field(() => TableViewDefinitionOrderByWithRelationInput, {nullable:true})
    tableViewDefinition?: TableViewDefinitionOrderByWithRelationInput;
}
