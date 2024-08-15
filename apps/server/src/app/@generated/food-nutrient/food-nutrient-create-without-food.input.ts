import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NutrientCreateNestedOneWithoutFoodNutrientsInput } from '../nutrient/nutrient-create-nested-one-without-food-nutrients.input';
import { ImportInfoCreateNestedOneWithoutFoodNutrientsInput } from '../import-info/import-info-create-nested-one-without-food-nutrients.input';

@InputType()
export class FoodNutrientCreateWithoutFoodInput {

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

    @Field(() => NutrientCreateNestedOneWithoutFoodNutrientsInput, {nullable:false})
    nutrient!: NutrientCreateNestedOneWithoutFoodNutrientsInput;

    @Field(() => ImportInfoCreateNestedOneWithoutFoodNutrientsInput, {nullable:true})
    importInfo?: ImportInfoCreateNestedOneWithoutFoodNutrientsInput;
}
