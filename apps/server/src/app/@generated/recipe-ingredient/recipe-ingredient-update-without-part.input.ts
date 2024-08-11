import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-ingredients-nested.input';
import { FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput } from '../food/food-update-one-required-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutPartInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unit?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutIngredientsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput;

    @Field(() => FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutRecipeIngredientNestedInput;
}
