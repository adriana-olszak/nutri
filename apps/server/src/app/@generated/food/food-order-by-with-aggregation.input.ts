import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodCountOrderByAggregateInput } from './food-count-order-by-aggregate.input';
import { FoodMaxOrderByAggregateInput } from './food-max-order-by-aggregate.input';
import { FoodMinOrderByAggregateInput } from './food-min-order-by-aggregate.input';

@InputType()
export class FoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    scientificName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    importInfoId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FoodCountOrderByAggregateInput, {nullable:true})
    _count?: FoodCountOrderByAggregateInput;

    @Field(() => FoodMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodMaxOrderByAggregateInput;

    @Field(() => FoodMinOrderByAggregateInput, {nullable:true})
    _min?: FoodMinOrderByAggregateInput;
}
