import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeUpdateOneRequiredWithoutPartsNestedInput } from '../recipe/recipe-update-one-required-without-parts-nested.input';

@InputType()
export class RecipePartUpdateWithoutIngredientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneRequiredWithoutPartsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutPartsNestedInput;
}
