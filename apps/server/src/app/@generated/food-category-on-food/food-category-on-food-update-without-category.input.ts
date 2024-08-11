import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FoodUpdateOneRequiredWithoutCategoriesNestedInput } from '../food/food-update-one-required-without-categories-nested.input';

@InputType()
export class FoodCategoryOnFoodUpdateWithoutCategoryInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrimaryCategory?: BoolFieldUpdateOperationsInput;

    @Field(() => FoodUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutCategoriesNestedInput;
}
