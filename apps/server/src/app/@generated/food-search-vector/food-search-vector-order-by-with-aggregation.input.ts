import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodSearchVectorCountOrderByAggregateInput } from './food-search-vector-count-order-by-aggregate.input';
import { FoodSearchVectorMaxOrderByAggregateInput } from './food-search-vector-max-order-by-aggregate.input';
import { FoodSearchVectorMinOrderByAggregateInput } from './food-search-vector-min-order-by-aggregate.input';

@InputType()
export class FoodSearchVectorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => FoodSearchVectorCountOrderByAggregateInput, {nullable:true})
    _count?: FoodSearchVectorCountOrderByAggregateInput;

    @Field(() => FoodSearchVectorMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodSearchVectorMaxOrderByAggregateInput;

    @Field(() => FoodSearchVectorMinOrderByAggregateInput, {nullable:true})
    _min?: FoodSearchVectorMinOrderByAggregateInput;
}
