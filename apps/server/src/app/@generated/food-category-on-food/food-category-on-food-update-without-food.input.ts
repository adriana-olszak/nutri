import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput } from '../food-category/food-category-update-one-required-without-foods-nested.input';

@InputType()
export class FoodCategoryOnFoodUpdateWithoutFoodInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrimaryCategory?: BoolFieldUpdateOperationsInput;

    @Field(() => FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput, {nullable:true})
    category?: FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput;
}
