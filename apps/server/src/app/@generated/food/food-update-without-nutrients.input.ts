import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FoodPortionUpdateManyWithoutFoodNestedInput } from '../food-portion/food-portion-update-many-without-food-nested.input';
import { BrandedFoodUpdateOneWithoutFoodNestedInput } from '../branded-food/branded-food-update-one-without-food-nested.input';
import { FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput } from '../food-category-on-food/food-category-on-food-update-many-without-food-nested.input';
import { FoodSearchVectorUpdateManyWithoutFoodNestedInput } from '../food-search-vector/food-search-vector-update-many-without-food-nested.input';
import { ImportInfoUpdateOneRequiredWithoutFoodsNestedInput } from '../import-info/import-info-update-one-required-without-foods-nested.input';
import { RecipeIngredientUpdateManyWithoutFoodNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-food-nested.input';

@InputType()
export class FoodUpdateWithoutNutrientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    scientificName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FoodPortionUpdateManyWithoutFoodNestedInput, {nullable:true})
    portions?: FoodPortionUpdateManyWithoutFoodNestedInput;

    @Field(() => BrandedFoodUpdateOneWithoutFoodNestedInput, {nullable:true})
    brandedFood?: BrandedFoodUpdateOneWithoutFoodNestedInput;

    @Field(() => FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput, {nullable:true})
    categories?: FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput;

    @Field(() => FoodSearchVectorUpdateManyWithoutFoodNestedInput, {nullable:true})
    searchVectors?: FoodSearchVectorUpdateManyWithoutFoodNestedInput;

    @Field(() => ImportInfoUpdateOneRequiredWithoutFoodsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneRequiredWithoutFoodsNestedInput;

    @Field(() => RecipeIngredientUpdateManyWithoutFoodNestedInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientUpdateManyWithoutFoodNestedInput;
}
