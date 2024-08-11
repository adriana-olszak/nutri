import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationUncheckedCreateNestedManyWithoutLanguageInput } from '../translation/translation-unchecked-create-nested-many-without-language.input';

@InputType()
export class LanguageUncheckedCreateWithoutSearchVectorsInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TranslationUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    translations?: TranslationUncheckedCreateNestedManyWithoutLanguageInput;
}
