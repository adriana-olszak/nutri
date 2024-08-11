import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageCreateWithoutTranslationsInput } from './language-create-without-translations.input';
import { Type } from 'class-transformer';
import { LanguageCreateOrConnectWithoutTranslationsInput } from './language-create-or-connect-without-translations.input';
import { Prisma } from '@prisma/client';
import { LanguageWhereUniqueInput } from './language-where-unique.input';

@InputType()
export class LanguageCreateNestedOneWithoutTranslationsInput {

    @Field(() => LanguageCreateWithoutTranslationsInput, {nullable:true})
    @Type(() => LanguageCreateWithoutTranslationsInput)
    create?: LanguageCreateWithoutTranslationsInput;

    @Field(() => LanguageCreateOrConnectWithoutTranslationsInput, {nullable:true})
    @Type(() => LanguageCreateOrConnectWithoutTranslationsInput)
    connectOrCreate?: LanguageCreateOrConnectWithoutTranslationsInput;

    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    @Type(() => LanguageWhereUniqueInput)
    connect?: Prisma.AtLeast<LanguageWhereUniqueInput, 'code'>;
}
