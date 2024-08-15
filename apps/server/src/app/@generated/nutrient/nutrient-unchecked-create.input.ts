import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput } from '../food-nutrient/food-nutrient-unchecked-create-nested-many-without-nutrient.input';

@InputType()
export class NutrientUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unitName!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;

    @Field(() => FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput, {nullable:true})
    foodNutrients?: FoodNutrientUncheckedCreateNestedManyWithoutNutrientInput;
}
