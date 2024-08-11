import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SeasonCountOrderByAggregateInput } from './season-count-order-by-aggregate.input';
import { SeasonMaxOrderByAggregateInput } from './season-max-order-by-aggregate.input';
import { SeasonMinOrderByAggregateInput } from './season-min-order-by-aggregate.input';

@InputType()
export class SeasonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SeasonCountOrderByAggregateInput, {nullable:true})
    _count?: SeasonCountOrderByAggregateInput;

    @Field(() => SeasonMaxOrderByAggregateInput, {nullable:true})
    _max?: SeasonMaxOrderByAggregateInput;

    @Field(() => SeasonMinOrderByAggregateInput, {nullable:true})
    _min?: SeasonMinOrderByAggregateInput;
}
