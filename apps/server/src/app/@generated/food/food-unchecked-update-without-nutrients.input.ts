import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FoodPortionUncheckedUpdateManyWithoutFoodNestedInput } from '../food-portion/food-portion-unchecked-update-many-without-food-nested.input';
import { BrandedFoodUncheckedUpdateOneWithoutFoodNestedInput } from '../branded-food/branded-food-unchecked-update-one-without-food-nested.input';
import { FoodCategoryOnFoodUncheckedUpdateManyWithoutFoodNestedInput } from '../food-category-on-food/food-category-on-food-unchecked-update-many-without-food-nested.input';
import { FoodSearchVectorUncheckedUpdateManyWithoutFoodNestedInput } from '../food-search-vector/food-search-vector-unchecked-update-many-without-food-nested.input';
import { RecipeIngredientUncheckedUpdateManyWithoutFoodNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-food-nested.input';

@InputType()
export class FoodUncheckedUpdateWithoutNutrientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sourceId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    scientificName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    importInfoId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FoodPortionUncheckedUpdateManyWithoutFoodNestedInput, {nullable:true})
    portions?: FoodPortionUncheckedUpdateManyWithoutFoodNestedInput;

    @Field(() => BrandedFoodUncheckedUpdateOneWithoutFoodNestedInput, {nullable:true})
    brandedFood?: BrandedFoodUncheckedUpdateOneWithoutFoodNestedInput;

    @Field(() => FoodCategoryOnFoodUncheckedUpdateManyWithoutFoodNestedInput, {nullable:true})
    categories?: FoodCategoryOnFoodUncheckedUpdateManyWithoutFoodNestedInput;

    @Field(() => FoodSearchVectorUncheckedUpdateManyWithoutFoodNestedInput, {nullable:true})
    searchVectors?: FoodSearchVectorUncheckedUpdateManyWithoutFoodNestedInput;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutFoodNestedInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientUncheckedUpdateManyWithoutFoodNestedInput;
}
