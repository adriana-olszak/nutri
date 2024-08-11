import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodNutrientCountOrderByAggregateInput } from './food-nutrient-count-order-by-aggregate.input';
import { FoodNutrientAvgOrderByAggregateInput } from './food-nutrient-avg-order-by-aggregate.input';
import { FoodNutrientMaxOrderByAggregateInput } from './food-nutrient-max-order-by-aggregate.input';
import { FoodNutrientMinOrderByAggregateInput } from './food-nutrient-min-order-by-aggregate.input';
import { FoodNutrientSumOrderByAggregateInput } from './food-nutrient-sum-order-by-aggregate.input';

@InputType()
export class FoodNutrientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nutrientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    min?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    median?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    confidenceCode?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => FoodNutrientCountOrderByAggregateInput, {nullable:true})
    _count?: FoodNutrientCountOrderByAggregateInput;

    @Field(() => FoodNutrientAvgOrderByAggregateInput, {nullable:true})
    _avg?: FoodNutrientAvgOrderByAggregateInput;

    @Field(() => FoodNutrientMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodNutrientMaxOrderByAggregateInput;

    @Field(() => FoodNutrientMinOrderByAggregateInput, {nullable:true})
    _min?: FoodNutrientMinOrderByAggregateInput;

    @Field(() => FoodNutrientSumOrderByAggregateInput, {nullable:true})
    _sum?: FoodNutrientSumOrderByAggregateInput;
}
