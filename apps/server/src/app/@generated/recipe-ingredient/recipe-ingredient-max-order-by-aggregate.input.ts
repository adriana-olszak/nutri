import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeIngredientMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantityText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ingredientText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    extraInfo?: keyof typeof SortOrder;
}
