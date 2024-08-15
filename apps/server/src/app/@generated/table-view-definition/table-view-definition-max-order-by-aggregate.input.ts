import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TableViewDefinitionMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tableId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tableType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filters?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sorting?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPreset?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isShared?: keyof typeof SortOrder;
}
