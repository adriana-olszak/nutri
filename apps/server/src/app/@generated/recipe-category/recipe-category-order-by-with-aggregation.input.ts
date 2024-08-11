import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeCategoryCountOrderByAggregateInput } from './recipe-category-count-order-by-aggregate.input';
import { RecipeCategoryMaxOrderByAggregateInput } from './recipe-category-max-order-by-aggregate.input';
import { RecipeCategoryMinOrderByAggregateInput } from './recipe-category-min-order-by-aggregate.input';

@InputType()
export class RecipeCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => RecipeCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeCategoryCountOrderByAggregateInput;

    @Field(() => RecipeCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeCategoryMaxOrderByAggregateInput;

    @Field(() => RecipeCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeCategoryMinOrderByAggregateInput;
}
