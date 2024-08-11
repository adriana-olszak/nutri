import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput } from '../food-nutrient/food-nutrient-unchecked-update-many-without-nutrient-nested.input';

@InputType()
export class NutrientUncheckedUpdateWithoutImportInfoInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unitName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput, {nullable:true})
    foodNutrients?: FoodNutrientUncheckedUpdateManyWithoutNutrientNestedInput;
}
