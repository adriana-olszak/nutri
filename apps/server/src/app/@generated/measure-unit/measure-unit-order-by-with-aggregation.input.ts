import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MeasureUnitCountOrderByAggregateInput } from './measure-unit-count-order-by-aggregate.input';
import { MeasureUnitMaxOrderByAggregateInput } from './measure-unit-max-order-by-aggregate.input';
import { MeasureUnitMinOrderByAggregateInput } from './measure-unit-min-order-by-aggregate.input';

@InputType()
export class MeasureUnitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    importInfoId?: SortOrderInput;

    @Field(() => MeasureUnitCountOrderByAggregateInput, {nullable:true})
    _count?: MeasureUnitCountOrderByAggregateInput;

    @Field(() => MeasureUnitMaxOrderByAggregateInput, {nullable:true})
    _max?: MeasureUnitMaxOrderByAggregateInput;

    @Field(() => MeasureUnitMinOrderByAggregateInput, {nullable:true})
    _min?: MeasureUnitMinOrderByAggregateInput;
}
