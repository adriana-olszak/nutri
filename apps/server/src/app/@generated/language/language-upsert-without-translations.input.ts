import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageUpdateWithoutTranslationsInput } from './language-update-without-translations.input';
import { Type } from 'class-transformer';
import { LanguageCreateWithoutTranslationsInput } from './language-create-without-translations.input';
import { LanguageWhereInput } from './language-where.input';

@InputType()
export class LanguageUpsertWithoutTranslationsInput {

    @Field(() => LanguageUpdateWithoutTranslationsInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutTranslationsInput)
    update!: LanguageUpdateWithoutTranslationsInput;

    @Field(() => LanguageCreateWithoutTranslationsInput, {nullable:false})
    @Type(() => LanguageCreateWithoutTranslationsInput)
    create!: LanguageCreateWithoutTranslationsInput;

    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: LanguageWhereInput;
}
