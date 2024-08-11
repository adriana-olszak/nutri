import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationCreateNestedManyWithoutLanguageInput } from '../translation/translation-create-nested-many-without-language.input';

@InputType()
export class LanguageCreateWithoutSearchVectorsInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TranslationCreateNestedManyWithoutLanguageInput, {nullable:true})
    translations?: TranslationCreateNestedManyWithoutLanguageInput;
}
