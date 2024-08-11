import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';
import { LanguageCreateWithoutTranslationsInput } from './language-create-without-translations.input';

@InputType()
export class LanguageCreateOrConnectWithoutTranslationsInput {

    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;

    @Field(() => LanguageCreateWithoutTranslationsInput, {nullable:false})
    @Type(() => LanguageCreateWithoutTranslationsInput)
    create!: LanguageCreateWithoutTranslationsInput;
}
