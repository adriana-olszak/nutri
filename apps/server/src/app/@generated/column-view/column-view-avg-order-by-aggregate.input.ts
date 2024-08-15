import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ColumnViewAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    columnId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
}
