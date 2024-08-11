import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FoodNutrientUpdateManyWithoutNutrientNestedInput } from '../food-nutrient/food-nutrient-update-many-without-nutrient-nested.input';
import { ImportInfoUpdateOneRequiredWithoutNutrientsNestedInput } from '../import-info/import-info-update-one-required-without-nutrients-nested.input';

@InputType()
export class NutrientUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unitName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => FoodNutrientUpdateManyWithoutNutrientNestedInput, {nullable:true})
    foodNutrients?: FoodNutrientUpdateManyWithoutNutrientNestedInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutNutrientsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutNutrientsNestedInput;
}
