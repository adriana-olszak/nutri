import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeIngredientUpdateManyWithoutPartNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-part-nested.input';

@InputType()
export class RecipePartUpdateWithoutRecipeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeIngredientUpdateManyWithoutPartNestedInput, {nullable:true})
    ingredients?: RecipeIngredientUpdateManyWithoutPartNestedInput;
}
