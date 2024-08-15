import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BrandedFoodRelationFilter } from '../branded-food/branded-food-relation-filter.input';

@InputType()
export class NutritionLabelWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    brandedFoodId?: string;

    @Field(() => [NutritionLabelWhereInput], {nullable:true})
    AND?: Array<NutritionLabelWhereInput>;

    @Field(() => [NutritionLabelWhereInput], {nullable:true})
    OR?: Array<NutritionLabelWhereInput>;

    @Field(() => [NutritionLabelWhereInput], {nullable:true})
    NOT?: Array<NutritionLabelWhereInput>;

    @Field(() => FloatNullableFilter, {nullable:true})
    calories?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    totalFat?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    saturatedFat?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    transFat?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    cholesterol?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    sodium?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    totalCarbohydrate?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    dietaryFiber?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    totalSugars?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    addedSugars?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    protein?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    vitaminA?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    vitaminC?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    vitaminD?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    calcium?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    iron?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    potassium?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    servingsPerContainer?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    householdServingFullText?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueFat?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueSaturatedFat?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueCholesterol?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueSodium?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueCarbohydrate?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueFiber?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueProtein?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueVitaminA?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueVitaminC?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueVitaminD?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueCalcium?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValueIron?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    percentDailyValuePotassium?: FloatNullableFilter;

    @Field(() => BrandedFoodRelationFilter, {nullable:true})
    brandedFood?: BrandedFoodRelationFilter;
}
