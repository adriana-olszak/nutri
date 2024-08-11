import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeImageCountOrderByAggregateInput } from './recipe-image-count-order-by-aggregate.input';
import { RecipeImageAvgOrderByAggregateInput } from './recipe-image-avg-order-by-aggregate.input';
import { RecipeImageMaxOrderByAggregateInput } from './recipe-image-max-order-by-aggregate.input';
import { RecipeImageMinOrderByAggregateInput } from './recipe-image-min-order-by-aggregate.input';
import { RecipeImageSumOrderByAggregateInput } from './recipe-image-sum-order-by-aggregate.input';

@InputType()
export class RecipeImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    altText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    width?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    height?: SortOrderInput;

    @Field(() => RecipeImageCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeImageCountOrderByAggregateInput;

    @Field(() => RecipeImageAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeImageAvgOrderByAggregateInput;

    @Field(() => RecipeImageMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeImageMaxOrderByAggregateInput;

    @Field(() => RecipeImageMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeImageMinOrderByAggregateInput;

    @Field(() => RecipeImageSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeImageSumOrderByAggregateInput;
}
