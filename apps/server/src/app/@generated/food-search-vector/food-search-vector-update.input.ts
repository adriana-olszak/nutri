import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FoodUpdateOneRequiredWithoutSearchVectorsNestedInput } from '../food/food-update-one-required-without-search-vectors-nested.input';
import { LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput } from '../language/language-update-one-required-without-search-vectors-nested.input';

@InputType()
export class FoodSearchVectorUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FoodUpdateOneRequiredWithoutSearchVectorsNestedInput, {nullable:true})
    food?: FoodUpdateOneRequiredWithoutSearchVectorsNestedInput;

    @Field(() => LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput, {nullable:true})
    language?: LanguageUpdateOneRequiredWithoutSearchVectorsNestedInput;
}
