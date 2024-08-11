import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateNestedOneWithoutTranslationsInput } from '../language/language-create-nested-one-without-translations.input';

@InputType()
export class TranslationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    entityType!: string;

    @Field(() => String, {nullable:false})
    entityId!: string;

    @Field(() => String, {nullable:false})
    field!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => LanguageCreateNestedOneWithoutTranslationsInput, {nullable:false})
    language!: LanguageCreateNestedOneWithoutTranslationsInput;
}
