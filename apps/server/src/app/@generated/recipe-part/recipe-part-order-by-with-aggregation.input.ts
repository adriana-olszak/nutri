import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipePartCountOrderByAggregateInput } from './recipe-part-count-order-by-aggregate.input';
import { RecipePartMaxOrderByAggregateInput } from './recipe-part-max-order-by-aggregate.input';
import { RecipePartMinOrderByAggregateInput } from './recipe-part-min-order-by-aggregate.input';

@InputType()
export class RecipePartOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => RecipePartCountOrderByAggregateInput, {nullable:true})
    _count?: RecipePartCountOrderByAggregateInput;

    @Field(() => RecipePartMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipePartMaxOrderByAggregateInput;

    @Field(() => RecipePartMinOrderByAggregateInput, {nullable:true})
    _min?: RecipePartMinOrderByAggregateInput;
}
