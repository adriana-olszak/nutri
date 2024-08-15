import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class NutritionLabelScalarWhereWithAggregatesInput {

    @Field(() => [NutritionLabelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NutritionLabelScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionLabelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NutritionLabelScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionLabelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NutritionLabelScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brandedFoodId?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    calories?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    totalFat?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    saturatedFat?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    transFat?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    cholesterol?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    sodium?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    totalCarbohydrate?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    dietaryFiber?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    totalSugars?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    addedSugars?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    protein?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    vitaminA?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    vitaminC?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    vitaminD?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    calcium?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    iron?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    potassium?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    servingsPerContainer?: FloatNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    householdServingFullText?: StringNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueFat?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueSaturatedFat?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueCholesterol?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueSodium?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueCarbohydrate?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueFiber?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueProtein?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueVitaminA?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueVitaminC?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueVitaminD?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueCalcium?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValueIron?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    percentDailyValuePotassium?: FloatNullableWithAggregatesFilter;
}
