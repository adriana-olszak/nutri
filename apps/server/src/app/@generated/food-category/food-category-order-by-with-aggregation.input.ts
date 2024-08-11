import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodCategoryCountOrderByAggregateInput } from './food-category-count-order-by-aggregate.input';
import { FoodCategoryAvgOrderByAggregateInput } from './food-category-avg-order-by-aggregate.input';
import { FoodCategoryMaxOrderByAggregateInput } from './food-category-max-order-by-aggregate.input';
import { FoodCategoryMinOrderByAggregateInput } from './food-category-min-order-by-aggregate.input';
import { FoodCategorySumOrderByAggregateInput } from './food-category-sum-order-by-aggregate.input';

@InputType()
export class FoodCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    parentCategoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => FoodCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: FoodCategoryCountOrderByAggregateInput;

    @Field(() => FoodCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: FoodCategoryAvgOrderByAggregateInput;

    @Field(() => FoodCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: FoodCategoryMaxOrderByAggregateInput;

    @Field(() => FoodCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: FoodCategoryMinOrderByAggregateInput;

    @Field(() => FoodCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: FoodCategorySumOrderByAggregateInput;
}
