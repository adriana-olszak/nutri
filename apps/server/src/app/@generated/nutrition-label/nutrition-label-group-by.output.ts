import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NutritionLabelCountAggregate } from './nutrition-label-count-aggregate.output';
import { NutritionLabelAvgAggregate } from './nutrition-label-avg-aggregate.output';
import { NutritionLabelSumAggregate } from './nutrition-label-sum-aggregate.output';
import { NutritionLabelMinAggregate } from './nutrition-label-min-aggregate.output';
import { NutritionLabelMaxAggregate } from './nutrition-label-max-aggregate.output';

@ObjectType()
export class NutritionLabelGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    brandedFoodId!: string;

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

    @Field(() => NutritionLabelCountAggregate, {nullable:true})
    _count?: NutritionLabelCountAggregate;

    @Field(() => NutritionLabelAvgAggregate, {nullable:true})
    _avg?: NutritionLabelAvgAggregate;

    @Field(() => NutritionLabelSumAggregate, {nullable:true})
    _sum?: NutritionLabelSumAggregate;

    @Field(() => NutritionLabelMinAggregate, {nullable:true})
    _min?: NutritionLabelMinAggregate;

    @Field(() => NutritionLabelMaxAggregate, {nullable:true})
    _max?: NutritionLabelMaxAggregate;
}
