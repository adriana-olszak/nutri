import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-ingredients-nested.input';
import { RecipePartUpdateOneWithoutIngredientsNestedInput } from '../recipe-part/recipe-part-update-one-without-ingredients-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutFoodInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    quantity?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    unit?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutIngredientsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput;

    @Field(() => RecipePartUpdateOneWithoutIngredientsNestedInput, {nullable:true})
    part?: RecipePartUpdateOneWithoutIngredientsNestedInput;
}
