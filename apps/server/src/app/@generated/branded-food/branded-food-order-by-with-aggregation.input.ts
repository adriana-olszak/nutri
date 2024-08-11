import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BrandedFoodCountOrderByAggregateInput } from './branded-food-count-order-by-aggregate.input';
import { BrandedFoodAvgOrderByAggregateInput } from './branded-food-avg-order-by-aggregate.input';
import { BrandedFoodMaxOrderByAggregateInput } from './branded-food-max-order-by-aggregate.input';
import { BrandedFoodMinOrderByAggregateInput } from './branded-food-min-order-by-aggregate.input';
import { BrandedFoodSumOrderByAggregateInput } from './branded-food-sum-order-by-aggregate.input';

@InputType()
export class BrandedFoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandOwner?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    gtinUpc?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ingredients?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingSize?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingUnit?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => BrandedFoodCountOrderByAggregateInput, {nullable:true})
    _count?: BrandedFoodCountOrderByAggregateInput;

    @Field(() => BrandedFoodAvgOrderByAggregateInput, {nullable:true})
    _avg?: BrandedFoodAvgOrderByAggregateInput;

    @Field(() => BrandedFoodMaxOrderByAggregateInput, {nullable:true})
    _max?: BrandedFoodMaxOrderByAggregateInput;

    @Field(() => BrandedFoodMinOrderByAggregateInput, {nullable:true})
    _min?: BrandedFoodMinOrderByAggregateInput;

    @Field(() => BrandedFoodSumOrderByAggregateInput, {nullable:true})
    _sum?: BrandedFoodSumOrderByAggregateInput;
}
