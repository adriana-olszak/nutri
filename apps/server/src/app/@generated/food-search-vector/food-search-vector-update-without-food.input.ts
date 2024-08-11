import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput } from '../language/language-update-one-required-without-search-vectors-nested.input';

@InputType()
export class FoodSearchVectorUpdateWithoutFoodInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput, {nullable:true})
    language?: LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput;
}
