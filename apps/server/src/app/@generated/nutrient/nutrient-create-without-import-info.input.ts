import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateNestedManyWithoutNutrientInput } from '../food-nutrient/food-nutrient-create-nested-many-without-nutrient.input';

@InputType()
export class NutrientCreateWithoutImportInfoInput {

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
}
