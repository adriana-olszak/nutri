import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutrientCountOrderByAggregateInput } from './nutrient-count-order-by-aggregate.input';
import { NutrientMaxOrderByAggregateInput } from './nutrient-max-order-by-aggregate.input';
import { NutrientMinOrderByAggregateInput } from './nutrient-min-order-by-aggregate.input';

@InputType()
export class NutrientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => NutrientCountOrderByAggregateInput, {nullable:true})
    _count?: NutrientCountOrderByAggregateInput;

    @Field(() => NutrientMaxOrderByAggregateInput, {nullable:true})
    _max?: NutrientMaxOrderByAggregateInput;

    @Field(() => NutrientMinOrderByAggregateInput, {nullable:true})
    _min?: NutrientMinOrderByAggregateInput;
}
