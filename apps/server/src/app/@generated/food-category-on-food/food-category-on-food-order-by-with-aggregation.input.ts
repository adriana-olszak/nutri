import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodCategoryOnFoodCountOrderByAggregateInput } from './food-category-on-food-count-order-by-aggregate.input';
import { FoodCategoryOnFoodMaxOrderByAggregateInput } from './food-category-on-food-max-order-by-aggregate.input';
import { FoodCategoryOnFoodMinOrderByAggregateInput } from './food-category-on-food-min-order-by-aggregate.input';

@InputType()
export class FoodCategoryOnFoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPrimaryCategory?: keyof typeof SortOrder;

    @Field(() => FoodCategoryOnFoodCountOrderByAggregateInput, {nullable:true})
    _count?: FoodCategoryOnFoodCountOrderByAggregateInput;

    @Field(() => FoodCategoryOnFoodMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodCategoryOnFoodMaxOrderByAggregateInput;

    @Field(() => FoodCategoryOnFoodMinOrderByAggregateInput, {nullable:true})
    _min?: FoodCategoryOnFoodMinOrderByAggregateInput;
}
