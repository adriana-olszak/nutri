import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FoodCreateNestedOneWithoutNutrientsInput } from '../food/food-create-nested-one-without-nutrients.input';
import { NutrientCreateNestedOneWithoutFoodNutrientsInput } from '../nutrient/nutrient-create-nested-one-without-food-nutrients.input';
import { ImportInfoCreateNestedOneWithoutFoodNutrientsInput } from '../import-info/import-info-create-nested-one-without-food-nutrients.input';

@InputType()
export class FoodNutrientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:true})
    min?: number;

    @Field(() => Float, {nullable:true})
    median?: number;

    @Field(() => Float, {nullable:true})
    max?: number;

    @Field(() => String, {nullable:true})
    confidenceCode?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => FoodCreateNestedOneWithoutNutrientsInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutNutrientsInput;

    @Field(() => NutrientCreateNestedOneWithoutFoodNutrientsInput, {nullable:false})
    nutrient!: NutrientCreateNestedOneWithoutFoodNutrientsInput;

    @Field(() => ImportInfoCreateNestedOneWithoutFoodNutrientsInput, {nullable:false})
    importInfo!: ImportInfoCreateNestedOneWithoutFoodNutrientsInput;
}
