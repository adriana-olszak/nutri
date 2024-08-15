import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeInstructionsCountOrderByAggregateInput } from './recipe-instructions-count-order-by-aggregate.input';
import { RecipeInstructionsAvgOrderByAggregateInput } from './recipe-instructions-avg-order-by-aggregate.input';
import { RecipeInstructionsMaxOrderByAggregateInput } from './recipe-instructions-max-order-by-aggregate.input';
import { RecipeInstructionsMinOrderByAggregateInput } from './recipe-instructions-min-order-by-aggregate.input';
import { RecipeInstructionsSumOrderByAggregateInput } from './recipe-instructions-sum-order-by-aggregate.input';

@InputType()
export class RecipeInstructionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    listIndex?: SortOrderInput;

    @Field(() => RecipeInstructionsCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeInstructionsCountOrderByAggregateInput;

    @Field(() => RecipeInstructionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeInstructionsAvgOrderByAggregateInput;

    @Field(() => RecipeInstructionsMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeInstructionsMaxOrderByAggregateInput;

    @Field(() => RecipeInstructionsMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeInstructionsMinOrderByAggregateInput;

    @Field(() => RecipeInstructionsSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeInstructionsSumOrderByAggregateInput;
}
