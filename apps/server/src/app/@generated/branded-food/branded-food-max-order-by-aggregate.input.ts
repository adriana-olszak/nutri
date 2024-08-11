import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BrandedFoodMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandOwner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gtinUpc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ingredients?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    servingSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    servingUnit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;
}
