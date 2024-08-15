import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeIngredientCountOrderByAggregateInput } from './recipe-ingredient-count-order-by-aggregate.input';
import { RecipeIngredientAvgOrderByAggregateInput } from './recipe-ingredient-avg-order-by-aggregate.input';
import { RecipeIngredientMaxOrderByAggregateInput } from './recipe-ingredient-max-order-by-aggregate.input';
import { RecipeIngredientMinOrderByAggregateInput } from './recipe-ingredient-min-order-by-aggregate.input';
import { RecipeIngredientSumOrderByAggregateInput } from './recipe-ingredient-sum-order-by-aggregate.input';

@InputType()
export class RecipeIngredientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    partId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    quantityText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    minQuantity?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    maxQuantity?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    unit?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    unitText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ingredientText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    extraInfo?: SortOrderInput;

    @Field(() => RecipeIngredientCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeIngredientCountOrderByAggregateInput;

    @Field(() => RecipeIngredientAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeIngredientAvgOrderByAggregateInput;

    @Field(() => RecipeIngredientMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeIngredientMaxOrderByAggregateInput;

    @Field(() => RecipeIngredientMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeIngredientMinOrderByAggregateInput;

    @Field(() => RecipeIngredientSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeIngredientSumOrderByAggregateInput;
}
