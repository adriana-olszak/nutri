import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
import { RecipePartOrderByWithRelationInput } from '../recipe-part/recipe-part-order-by-with-relation.input';
import { FoodOrderByWithRelationInput } from '../food/food-order-by-with-relation.input';

@InputType()
export class RecipeIngredientOrderByWithRelationInput {

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

    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: RecipeOrderByWithRelationInput;

    @Field(() => RecipePartOrderByWithRelationInput, {nullable:true})
    part?: RecipePartOrderByWithRelationInput;

    @Field(() => FoodOrderByWithRelationInput, {nullable:true})
    food?: FoodOrderByWithRelationInput;
}
