import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BrandedFood } from '../branded-food/branded-food.model';

@ObjectType()
export class NutritionLabel {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    brandedFoodId!: string;

    @Field(() => Float, {nullable:true})
    calories!: number | null;

    @Field(() => Float, {nullable:true})
    totalFat!: number | null;

    @Field(() => Float, {nullable:true})
    saturatedFat!: number | null;

    @Field(() => Float, {nullable:true})
    transFat!: number | null;

    @Field(() => Float, {nullable:true})
    cholesterol!: number | null;

    @Field(() => Float, {nullable:true})
    sodium!: number | null;

    @Field(() => Float, {nullable:true})
    totalCarbohydrate!: number | null;

    @Field(() => Float, {nullable:true})
    dietaryFiber!: number | null;

    @Field(() => Float, {nullable:true})
    totalSugars!: number | null;

    @Field(() => Float, {nullable:true})
    addedSugars!: number | null;

    @Field(() => Float, {nullable:true})
    protein!: number | null;

    @Field(() => Float, {nullable:true})
    vitaminA!: number | null;

    @Field(() => Float, {nullable:true})
    vitaminC!: number | null;

    @Field(() => Float, {nullable:true})
    vitaminD!: number | null;

    @Field(() => Float, {nullable:true})
    calcium!: number | null;

    @Field(() => Float, {nullable:true})
    iron!: number | null;

    @Field(() => Float, {nullable:true})
    potassium!: number | null;

    @Field(() => Float, {nullable:true})
    servingsPerContainer!: number | null;

    @Field(() => String, {nullable:true})
    householdServingFullText!: string | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueFat!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueSaturatedFat!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueCholesterol!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueSodium!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueCarbohydrate!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueFiber!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueProtein!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueVitaminA!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueVitaminC!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueVitaminD!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueCalcium!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValueIron!: number | null;

    @Field(() => Float, {nullable:true})
    percentDailyValuePotassium!: number | null;

    @Field(() => BrandedFood, {nullable:false})
    brandedFood?: BrandedFood;
}
