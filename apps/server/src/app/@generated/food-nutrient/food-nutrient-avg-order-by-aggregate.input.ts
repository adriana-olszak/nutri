import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FoodNutrientAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    median?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max?: keyof typeof SortOrder;
}
