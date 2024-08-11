import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutPartsNestedInput } from '../recipe/recipe-update-one-required-without-parts-nested.input';
import { RecipeIngredientUpdateManyWithoutPartNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-part-nested.input';

@InputType()
export class RecipePartUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutPartsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutPartsNestedInput;

    @Field(() => RecipeIngredientUpdateManyWithoutPartNestedInput, {nullable:true})
    ingredients?: RecipeIngredientUpdateManyWithoutPartNestedInput;
}
