import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TranslationUncheckedUpdateManyWithoutLanguageNestedInput } from '../translation/translation-unchecked-update-many-without-language-nested.input';
import { FoodSearchVectorUncheckedUpdateManyWithoutLanguageNestedInput } from '../food-search-vector/food-search-vector-unchecked-update-many-without-language-nested.input';

@InputType()
export class LanguageUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TranslationUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    translations?: TranslationUncheckedUpdateManyWithoutLanguageNestedInput;

    @Field(() => FoodSearchVectorUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    searchVectors?: FoodSearchVectorUncheckedUpdateManyWithoutLanguageNestedInput;
}
