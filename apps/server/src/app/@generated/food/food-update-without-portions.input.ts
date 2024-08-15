import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FoodNutrientUpdateManyWithoutFoodNestedInput } from '../food-nutrient/food-nutrient-update-many-without-food-nested.input';
import { BrandedFoodUpdateOneWithoutFoodNestedInput } from '../branded-food/branded-food-update-one-without-food-nested.input';
import { FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput } from '../food-category-on-food/food-category-on-food-update-many-without-food-nested.input';
import { FoodSearchVectorUpdateManyWithoutFoodNestedInput } from '../food-search-vector/food-search-vector-update-many-without-food-nested.input';
import { ImportInfoUpdateOneWithoutFoodsNestedInput } from '../import-info/import-info-update-one-without-foods-nested.input';
import { RecipeIngredientUpdateManyWithoutFoodNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-food-nested.input';

@InputType()
export class FoodUpdateWithoutPortionsInput {

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

    @Field(() => FoodNutrientUpdateManyWithoutFoodNestedInput, {nullable:true})
    nutrients?: FoodNutrientUpdateManyWithoutFoodNestedInput;

    @Field(() => BrandedFoodUpdateOneWithoutFoodNestedInput, {nullable:true})
    brandedFood?: BrandedFoodUpdateOneWithoutFoodNestedInput;

    @Field(() => FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput, {nullable:true})
    categories?: FoodCategoryOnFoodUpdateManyWithoutFoodNestedInput;

    @Field(() => FoodSearchVectorUpdateManyWithoutFoodNestedInput, {nullable:true})
    searchVectors?: FoodSearchVectorUpdateManyWithoutFoodNestedInput;

    @Field(() => ImportInfoUpdateOneWithoutFoodsNestedInput, {nullable:true})
    importInfo?: ImportInfoUpdateOneWithoutFoodsNestedInput;

    @Field(() => RecipeIngredientUpdateManyWithoutFoodNestedInput, {nullable:true})
    RecipeIngredient?: RecipeIngredientUpdateManyWithoutFoodNestedInput;
}
