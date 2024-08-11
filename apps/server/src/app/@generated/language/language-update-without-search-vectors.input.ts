import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TranslationUpdateManyWithoutLanguageNestedInput } from '../translation/translation-update-many-without-language-nested.input';

@InputType()
export class LanguageUpdateWithoutSearchVectorsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TranslationUpdateManyWithoutLanguageNestedInput, {nullable:true})
    translations?: TranslationUpdateManyWithoutLanguageNestedInput;
}
