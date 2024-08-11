import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    servingsMin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    servingsMax?: keyof typeof SortOrder;
}
