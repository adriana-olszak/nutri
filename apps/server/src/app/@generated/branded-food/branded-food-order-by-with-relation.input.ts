import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FoodOrderByWithRelationInput } from '../food/food-order-by-with-relation.input';
import { ImportInfoOrderByWithRelationInput } from '../import-info/import-info-order-by-with-relation.input';
import { NutritionLabelOrderByWithRelationInput } from '../nutrition-label/nutrition-label-order-by-with-relation.input';

@InputType()
export class BrandedFoodOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    foodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandOwner?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    gtinUpc?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ingredients?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingSize?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingUnit?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    importInfoId?: keyof typeof SortOrder;

    @Field(() => FoodOrderByWithRelationInput, {nullable:true})
    food?: FoodOrderByWithRelationInput;

    @Field(() => ImportInfoOrderByWithRelationInput, {nullable:true})
    importInfo?: ImportInfoOrderByWithRelationInput;

    @Field(() => NutritionLabelOrderByWithRelationInput, {nullable:true})
    nutritionLabel?: NutritionLabelOrderByWithRelationInput;
}
