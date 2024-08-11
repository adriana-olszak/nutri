import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipePartOrderByRelationAggregateInput } from '../recipe-part/recipe-part-order-by-relation-aggregate.input';
import { RecipeIngredientOrderByRelationAggregateInput } from '../recipe-ingredient/recipe-ingredient-order-by-relation-aggregate.input';
import { RecipeCategoryOrderByRelationAggregateInput } from '../recipe-category/recipe-category-order-by-relation-aggregate.input';
import { RecipeImageOrderByRelationAggregateInput } from '../recipe-image/recipe-image-order-by-relation-aggregate.input';
import { SeasonOrderByRelationAggregateInput } from '../season/season-order-by-relation-aggregate.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';

@InputType()
export class RecipeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    sourceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sourceUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cookingTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    prepTime?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    instructions?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsMin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsMax?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RecipePartOrderByRelationAggregateInput, {nullable:true})
    parts?: RecipePartOrderByRelationAggregateInput;

    @Field(() => RecipeIngredientOrderByRelationAggregateInput, {nullable:true})
    ingredients?: RecipeIngredientOrderByRelationAggregateInput;

    @Field(() => RecipeCategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: RecipeCategoryOrderByRelationAggregateInput;

    @Field(() => RecipeImageOrderByRelationAggregateInput, {nullable:true})
    images?: RecipeImageOrderByRelationAggregateInput;

    @Field(() => SeasonOrderByRelationAggregateInput, {nullable:true})
    seasons?: SeasonOrderByRelationAggregateInput;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;
}
