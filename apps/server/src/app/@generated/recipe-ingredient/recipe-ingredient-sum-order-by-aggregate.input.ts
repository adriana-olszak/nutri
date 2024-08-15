import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeIngredientSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxQuantity?: keyof typeof SortOrder;
}
