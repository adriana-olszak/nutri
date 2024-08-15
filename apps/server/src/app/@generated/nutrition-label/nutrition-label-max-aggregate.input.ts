import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionLabelMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    brandedFoodId?: true;

    @Field(() => Boolean, {nullable:true})
    calories?: true;

    @Field(() => Boolean, {nullable:true})
    totalFat?: true;

    @Field(() => Boolean, {nullable:true})
    saturatedFat?: true;

    @Field(() => Boolean, {nullable:true})
    transFat?: true;

    @Field(() => Boolean, {nullable:true})
    cholesterol?: true;

    @Field(() => Boolean, {nullable:true})
    sodium?: true;

    @Field(() => Boolean, {nullable:true})
    totalCarbohydrate?: true;

    @Field(() => Boolean, {nullable:true})
    dietaryFiber?: true;

    @Field(() => Boolean, {nullable:true})
    totalSugars?: true;

    @Field(() => Boolean, {nullable:true})
    addedSugars?: true;

    @Field(() => Boolean, {nullable:true})
    protein?: true;

    @Field(() => Boolean, {nullable:true})
    vitaminA?: true;

    @Field(() => Boolean, {nullable:true})
    vitaminC?: true;

    @Field(() => Boolean, {nullable:true})
    vitaminD?: true;

    @Field(() => Boolean, {nullable:true})
    calcium?: true;

    @Field(() => Boolean, {nullable:true})
    iron?: true;

    @Field(() => Boolean, {nullable:true})
    potassium?: true;

    @Field(() => Boolean, {nullable:true})
    servingsPerContainer?: true;

    @Field(() => Boolean, {nullable:true})
    householdServingFullText?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueFat?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueSaturatedFat?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueCholesterol?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueSodium?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueCarbohydrate?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueFiber?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueProtein?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueVitaminA?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueVitaminC?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueVitaminD?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueCalcium?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValueIron?: true;

    @Field(() => Boolean, {nullable:true})
    percentDailyValuePotassium?: true;
}
