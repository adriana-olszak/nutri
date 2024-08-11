import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { LanguageUpdateWithoutTranslationsInput } from './language-update-without-translations.input';

@InputType()
export class LanguageUpdateToOneWithWhereWithoutTranslationsInput {

    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: LanguageWhereInput;

    @Field(() => LanguageUpdateWithoutTranslationsInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutTranslationsInput)
    data!: LanguageUpdateWithoutTranslationsInput;
}
