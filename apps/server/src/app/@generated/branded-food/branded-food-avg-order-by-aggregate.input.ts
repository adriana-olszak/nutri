import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BrandedFoodAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    servingSize?: keyof typeof SortOrder;
}
