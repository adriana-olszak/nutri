import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-ingredients-nested.input';
import { FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput } from '../food/food-update-one-required-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutPartInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    quantityText?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    minQuantity?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    maxQuantity?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unit?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    unitText?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ingredientText?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    extraInfo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutIngredientsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput;

    @Field(() => FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput;
}
