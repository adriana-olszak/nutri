import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NutritionLabelCountOrderByAggregateInput } from './nutrition-label-count-order-by-aggregate.input';
import { NutritionLabelAvgOrderByAggregateInput } from './nutrition-label-avg-order-by-aggregate.input';
import { NutritionLabelMaxOrderByAggregateInput } from './nutrition-label-max-order-by-aggregate.input';
import { NutritionLabelMinOrderByAggregateInput } from './nutrition-label-min-order-by-aggregate.input';
import { NutritionLabelSumOrderByAggregateInput } from './nutrition-label-sum-order-by-aggregate.input';

@InputType()
export class NutritionLabelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandedFoodId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    calories?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    totalFat?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    saturatedFat?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    transFat?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cholesterol?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sodium?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    totalCarbohydrate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    dietaryFiber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    totalSugars?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addedSugars?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    protein?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    vitaminA?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    vitaminC?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    vitaminD?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    calcium?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    iron?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    potassium?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    servingsPerContainer?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    householdServingFullText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueFat?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueSaturatedFat?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueCholesterol?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueSodium?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueCarbohydrate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueFiber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueProtein?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueVitaminA?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueVitaminC?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueVitaminD?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueCalcium?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValueIron?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    percentDailyValuePotassium?: SortOrderInput;

    @Field(() => NutritionLabelCountOrderByAggregateInput, {nullable:true})
    _count?: NutritionLabelCountOrderByAggregateInput;

    @Field(() => NutritionLabelAvgOrderByAggregateInput, {nullable:true})
    _avg?: NutritionLabelAvgOrderByAggregateInput;

    @Field(() => NutritionLabelMaxOrderByAggregateInput, {nullable:true})
    _max?: NutritionLabelMaxOrderByAggregateInput;

    @Field(() => NutritionLabelMinOrderByAggregateInput, {nullable:true})
    _min?: NutritionLabelMinOrderByAggregateInput;

    @Field(() => NutritionLabelSumOrderByAggregateInput, {nullable:true})
    _sum?: NutritionLabelSumOrderByAggregateInput;
}
