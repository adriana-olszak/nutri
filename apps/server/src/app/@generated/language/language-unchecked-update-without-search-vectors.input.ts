import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TranslationUncheckedUpdateManyWithoutLanguageNestedInput } from '../translation/translation-unchecked-update-many-without-language-nested.input';

@InputType()
export class LanguageUncheckedUpdateWithoutSearchVectorsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TranslationUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    translations?: TranslationUncheckedUpdateManyWithoutLanguageNestedInput;
}
