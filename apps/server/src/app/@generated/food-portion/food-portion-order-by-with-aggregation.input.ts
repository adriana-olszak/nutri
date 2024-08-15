import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodPortionCountOrderByAggregateInput } from './food-portion-count-order-by-aggregate.input';
import { FoodPortionAvgOrderByAggregateInput } from './food-portion-avg-order-by-aggregate.input';
import { FoodPortionMaxOrderByAggregateInput } from './food-portion-max-order-by-aggregate.input';
import { FoodPortionMinOrderByAggregateInput } from './food-portion-min-order-by-aggregate.input';
import { FoodPortionSumOrderByAggregateInput } from './food-portion-sum-order-by-aggregate.input';

@InputType()
export class FoodPortionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gramWeight?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    portionDescription?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measureUnitName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    importInfoId?: SortOrderInput;

    @Field(() => FoodPortionCountOrderByAggregateInput, {nullable:true})
    _count?: FoodPortionCountOrderByAggregateInput;

    @Field(() => FoodPortionAvgOrderByAggregateInput, {nullable:true})
    _avg?: FoodPortionAvgOrderByAggregateInput;

    @Field(() => FoodPortionMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodPortionMaxOrderByAggregateInput;

    @Field(() => FoodPortionMinOrderByAggregateInput, {nullable:true})
    _min?: FoodPortionMinOrderByAggregateInput;

    @Field(() => FoodPortionSumOrderByAggregateInput, {nullable:true})
    _sum?: FoodPortionSumOrderByAggregateInput;
}
