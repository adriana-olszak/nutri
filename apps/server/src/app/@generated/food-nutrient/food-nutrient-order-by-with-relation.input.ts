import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodOrderByWithRelationInput } from '../food/food-order-by-with-relation.input';
import { NutrientOrderByWithRelationInput } from '../nutrient/nutrient-order-by-with-relation.input';
import { ImportInfoOrderByWithRelationInput } from '../import-info/import-info-order-by-with-relation.input';

@InputType()
export class FoodNutrientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nutrientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    min?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    median?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    confidenceCode?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => FoodOrderByWithRelationInput, {nullable:true})
    food?: FoodOrderByWithRelationInput;

    @Field(() => NutrientOrderByWithRelationInput, {nullable:true})
    nutrient?: NutrientOrderByWithRelationInput;

    @Field(() => ImportInfoOrderByWithRelationInput, {nullable:true})
    importInfo?: ImportInfoOrderByWithRelationInput;
}
