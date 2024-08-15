import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodNutrientOrderByRelationAggregateInput } from '../food-nutrient/food-nutrient-order-by-relation-aggregate.input';
import { FoodPortionOrderByRelationAggregateInput } from '../food-portion/food-portion-order-by-relation-aggregate.input';
import { BrandedFoodOrderByWithRelationInput } from '../branded-food/branded-food-order-by-with-relation.input';
import { FoodCategoryOnFoodOrderByRelationAggregateInput } from '../food-category-on-food/food-category-on-food-order-by-relation-aggregate.input';
import { FoodSearchVectorOrderByRelationAggregateInput } from '../food-search-vector/food-search-vector-order-by-relation-aggregate.input';
import { ImportInfoOrderByWithRelationInput } from '../import-info/import-info-order-by-with-relation.input';
import { RecipeIngredientOrderByRelationAggregateInput } from '../recipe-ingredient/recipe-ingredient-order-by-relation-aggregate.input';

@InputType()
export class FoodOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    scientificName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    importInfoId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FoodNutrientOrderByRelationAggregateInput, {nullable:true})
    nutrients?: FoodNutrientOrderByRelationAggregateInput;

    @Field(() => FoodPortionOrderByRelationAggregateInput, {nullable:true})
    portions?: FoodPortionOrderByRelationAggregateInput;

    @Field(() => BrandedFoodOrderByWithRelationInput, {nullable:true})
    brandedFood?: BrandedFoodOrderByWithRelationInput;

    @Field(() => FoodCategoryOnFoodOrderByRelationAggregateInput, {nullable:true})
    categories?: FoodCategoryOnFoodOrderByRelationAggregateInput;

    @Field(() => FoodSearchVectorOrderByRelationAggregateInput, {nullable:true})
    searchVectors?: FoodSearchVectorOrderByRelationAggregateInput;

    @Field(() => ImportInfoOrderByWithRelationInput, {nullable:true})
    importInfo?: ImportInfoOrderByWithRelationInput;

    @Field(() => RecipeIngredientOrderByRelationAggregateInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientOrderByRelationAggregateInput;
}
