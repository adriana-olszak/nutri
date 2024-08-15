import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NutritionLabelMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandedFoodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalFat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    saturatedFat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transFat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cholesterol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sodium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalCarbohydrate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dietaryFiber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalSugars?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addedSugars?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    protein?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vitaminA?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vitaminC?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vitaminD?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    calcium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iron?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    potassium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    servingsPerContainer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdServingFullText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueFat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueSaturatedFat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueCholesterol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueSodium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueCarbohydrate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueFiber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueProtein?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueVitaminA?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueVitaminC?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueVitaminD?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueCalcium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValueIron?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentDailyValuePotassium?: keyof typeof SortOrder;
}
