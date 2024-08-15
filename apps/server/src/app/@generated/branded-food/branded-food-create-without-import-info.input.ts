import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FoodCreateNestedOneWithoutBrandedFoodInput } from '../food/food-create-nested-one-without-branded-food.input';
import { NutritionLabelCreateNestedOneWithoutBrandedFoodInput } from '../nutrition-label/nutrition-label-create-nested-one-without-branded-food.input';

@InputType()
export class BrandedFoodCreateWithoutImportInfoInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    brandOwner!: string;

    @Field(() => String, {nullable:true})
    gtinUpc?: string;

    @Field(() => String, {nullable:true})
    ingredients?: string;

    @Field(() => Float, {nullable:true})
    servingSize?: number;

    @Field(() => String, {nullable:true})
    servingUnit?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => FoodCreateNestedOneWithoutBrandedFoodInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutBrandedFoodInput;

    @Field(() => NutritionLabelCreateNestedOneWithoutBrandedFoodInput, {nullable:true})
    nutritionLabel?: NutritionLabelCreateNestedOneWithoutBrandedFoodInput;
}
