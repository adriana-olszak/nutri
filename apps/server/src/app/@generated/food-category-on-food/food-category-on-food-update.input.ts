import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { FoodUpdateOneRequiredWithoutCategoriesNestedInput } from '../food/food-update-one-required-without-categories-nested.input';
import { FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput } from '../food-category/food-category-update-one-required-without-foods-nested.input';

@InputType()
export class FoodCategoryOnFoodUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPrimaryCategory?: BoolFieldUpdateOperationsInput;

    @Field(() => FoodUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutCategoriesNestedInput;

    @Field(() => FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput, {nullable:true})
    category?: FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput;
}
