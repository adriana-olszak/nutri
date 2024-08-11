import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeIngredientUncheckedUpdateManyWithoutPartNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-part-nested.input';

@InputType()
export class RecipePartUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutPartNestedInput, {nullable:true})
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutPartNestedInput;
}
