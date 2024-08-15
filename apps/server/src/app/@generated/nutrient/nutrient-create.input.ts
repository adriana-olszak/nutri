import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateNestedManyWithoutNutrientInput } from '../food-nutrient/food-nutrient-create-nested-many-without-nutrient.input';
import { ImportInfoCreateNestedOneWithoutNutrientsInput } from '../import-info/import-info-create-nested-one-without-nutrients.input';

@InputType()
export class NutrientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unitName!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => FoodNutrientCreateNestedManyWithoutNutrientInput, {nullable:true})
    foodNutrients?: FoodNutrientCreateNestedManyWithoutNutrientInput;

    @Field(() => ImportInfoCreateNestedOneWithoutNutrientsInput, {nullable:true})
    importInfo?: ImportInfoCreateNestedOneWithoutNutrientsInput;
}
