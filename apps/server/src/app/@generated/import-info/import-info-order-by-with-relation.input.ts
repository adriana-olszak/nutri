import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FoodOrderByRelationAggregateInput } from '../food/food-order-by-relation-aggregate.input';
import { FoodCategoryOrderByRelationAggregateInput } from '../food-category/food-category-order-by-relation-aggregate.input';
import { BrandedFoodOrderByRelationAggregateInput } from '../branded-food/branded-food-order-by-relation-aggregate.input';
import { NutrientOrderByRelationAggregateInput } from '../nutrient/nutrient-order-by-relation-aggregate.input';
import { FoodNutrientOrderByRelationAggregateInput } from '../food-nutrient/food-nutrient-order-by-relation-aggregate.input';
import { FoodPortionOrderByRelationAggregateInput } from '../food-portion/food-portion-order-by-relation-aggregate.input';
import { MeasureUnitOrderByRelationAggregateInput } from '../measure-unit/measure-unit-order-by-relation-aggregate.input';

@InputType()
export class ImportInfoOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceVersion?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dataSource?: keyof typeof SortOrder;

    @Field(() => FoodOrderByRelationAggregateInput, {nullable:true})
    foods?: FoodOrderByRelationAggregateInput;

    @Field(() => FoodCategoryOrderByRelationAggregateInput, {nullable:true})
    foodCategories?: FoodCategoryOrderByRelationAggregateInput;

    @Field(() => BrandedFoodOrderByRelationAggregateInput, {nullable:true})
    brandedFoods?: BrandedFoodOrderByRelationAggregateInput;

    @Field(() => NutrientOrderByRelationAggregateInput, {nullable:true})
    nutrients?: NutrientOrderByRelationAggregateInput;

    @Field(() => FoodNutrientOrderByRelationAggregateInput, {nullable:true})
    foodNutrients?: FoodNutrientOrderByRelationAggregateInput;

    @Field(() => FoodPortionOrderByRelationAggregateInput, {nullable:true})
    foodPortions?: FoodPortionOrderByRelationAggregateInput;

    @Field(() => MeasureUnitOrderByRelationAggregateInput, {nullable:true})
    measureUnits?: MeasureUnitOrderByRelationAggregateInput;
}
