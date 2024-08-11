import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput } from '../food-nutrient/food-nutrient-unchecked-create-nested-many-without-nutrient.input';

@InputType()
export class NutrientUncheckedCreateWithoutImportInfoInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unitName!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput, {nullable:true})
    foodNutrients?: FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput;
}
