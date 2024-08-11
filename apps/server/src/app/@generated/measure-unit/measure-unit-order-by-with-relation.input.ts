import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodPortionOrderByRelationAggregateInput } from '../food-portion/food-portion-order-by-relation-aggregate.input';
import { ImportInfoOrderByWithRelationInput } from '../import-info/import-info-order-by-with-relation.input';

@InputType()
export class MeasureUnitOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => FoodPortionOrderByRelationAggregateInput, {nullable:true})
    FoodPortion?: FoodPortionOrderByRelationAggregateInput;

    @Field(() => ImportInfoOrderByWithRelationInput, {nullable:true})
    importInfo?: ImportInfoOrderByWithRelationInput;
}
