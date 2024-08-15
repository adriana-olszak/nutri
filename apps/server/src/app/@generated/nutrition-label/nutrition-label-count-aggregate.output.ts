import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionLabelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    brandedFoodId!: number;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:false})
    totalFat!: number;

    @Field(() => Int, {nullable:false})
    saturatedFat!: number;

    @Field(() => Int, {nullable:false})
    transFat!: number;

    @Field(() => Int, {nullable:false})
    cholesterol!: number;

    @Field(() => Int, {nullable:false})
    sodium!: number;

    @Field(() => Int, {nullable:false})
    totalCarbohydrate!: number;

    @Field(() => Int, {nullable:false})
    dietaryFiber!: number;

    @Field(() => Int, {nullable:false})
    totalSugars!: number;

    @Field(() => Int, {nullable:false})
    addedSugars!: number;

    @Field(() => Int, {nullable:false})
    protein!: number;

    @Field(() => Int, {nullable:false})
    vitaminA!: number;

    @Field(() => Int, {nullable:false})
    vitaminC!: number;

    @Field(() => Int, {nullable:false})
    vitaminD!: number;

    @Field(() => Int, {nullable:false})
    calcium!: number;

    @Field(() => Int, {nullable:false})
    iron!: number;

    @Field(() => Int, {nullable:false})
    potassium!: number;

    @Field(() => Int, {nullable:false})
    servingsPerContainer!: number;

    @Field(() => Int, {nullable:false})
    householdServingFullText!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueFat!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueSaturatedFat!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueCholesterol!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueSodium!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueCarbohydrate!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueFiber!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueProtein!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueVitaminA!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueVitaminC!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueVitaminD!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueCalcium!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValueIron!: number;

    @Field(() => Int, {nullable:false})
    percentDailyValuePotassium!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
