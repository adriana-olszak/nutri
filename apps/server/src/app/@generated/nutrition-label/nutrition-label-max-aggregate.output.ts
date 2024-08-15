import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NutritionLabelMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    brandedFoodId?: string;

    @Field(() => Float, {nullable:true})
    calories?: number;

    @Field(() => Float, {nullable:true})
    totalFat?: number;

    @Field(() => Float, {nullable:true})
    saturatedFat?: number;

    @Field(() => Float, {nullable:true})
    transFat?: number;

    @Field(() => Float, {nullable:true})
    cholesterol?: number;

    @Field(() => Float, {nullable:true})
    sodium?: number;

    @Field(() => Float, {nullable:true})
    totalCarbohydrate?: number;

    @Field(() => Float, {nullable:true})
    dietaryFiber?: number;

    @Field(() => Float, {nullable:true})
    totalSugars?: number;

    @Field(() => Float, {nullable:true})
    addedSugars?: number;

    @Field(() => Float, {nullable:true})
    protein?: number;

    @Field(() => Float, {nullable:true})
    vitaminA?: number;

    @Field(() => Float, {nullable:true})
    vitaminC?: number;

    @Field(() => Float, {nullable:true})
    vitaminD?: number;

    @Field(() => Float, {nullable:true})
    calcium?: number;

    @Field(() => Float, {nullable:true})
    iron?: number;

    @Field(() => Float, {nullable:true})
    potassium?: number;

    @Field(() => Float, {nullable:true})
    servingsPerContainer?: number;

    @Field(() => String, {nullable:true})
    householdServingFullText?: string;

    @Field(() => Float, {nullable:true})
    percentDailyValueFat?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueSaturatedFat?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueCholesterol?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueSodium?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueCarbohydrate?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueFiber?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueProtein?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueVitaminA?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueVitaminC?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueVitaminD?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueCalcium?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValueIron?: number;

    @Field(() => Float, {nullable:true})
    percentDailyValuePotassium?: number;
}
