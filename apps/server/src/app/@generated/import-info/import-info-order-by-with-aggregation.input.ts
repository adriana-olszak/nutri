import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImportInfoCountOrderByAggregateInput } from './import-info-count-order-by-aggregate.input';
import { ImportInfoMaxOrderByAggregateInput } from './import-info-max-order-by-aggregate.input';
import { ImportInfoMinOrderByAggregateInput } from './import-info-min-order-by-aggregate.input';

@InputType()
export class ImportInfoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceVersion?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dataSource?: keyof typeof SortOrder;

    @Field(() => ImportInfoCountOrderByAggregateInput, {nullable:true})
    _count?: ImportInfoCountOrderByAggregateInput;

    @Field(() => ImportInfoMaxOrderByAggregateInput, {nullable:true})
    _max?: ImportInfoMaxOrderByAggregateInput;

    @Field(() => ImportInfoMinOrderByAggregateInput, {nullable:true})
    _min?: ImportInfoMinOrderByAggregateInput;
}
