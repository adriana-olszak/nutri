import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodNutrientOrderByRelationAggregateInput } from '../food-nutrient/food-nutrient-order-by-relation-aggregate.input';
import { ImportInfoOrderByWithRelationInput } from '../import-info/import-info-order-by-with-relation.input';

@InputType()
export class NutrientOrderByWithRelationInput {

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

    @Field(() => FoodNutrientOrderByRelationAggregateInput, {nullable:true})
    foodNutrients?: FoodNutrientOrderByRelationAggregateInput;

    @Field(() => ImportInfoOrderByWithRelationInput, {nullable:true})
    importInfo?: ImportInfoOrderByWithRelationInput;
}
