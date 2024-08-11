import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
import { RecipeIngredientOrderByRelationAggregateInput } from '../recipe-ingredient/recipe-ingredient-order-by-relation-aggregate.input';

@InputType()
export class RecipePartOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: RecipeOrderByWithRelationInput;

    @Field(() => RecipeIngredientOrderByRelationAggregateInput, {nullable:true})
    ingredients?: RecipeIngredientOrderByRelationAggregateInput;
}
