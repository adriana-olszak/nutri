import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';
import { Type } from 'class-transformer';
import { TranslationCreateWithoutLanguageInput } from './translation-create-without-language.input';

@InputType()
export class TranslationCreateOrConnectWithoutLanguageInput {

    @Field(() => TranslationWhereUniqueInput, {nullable:false})
    @Type(() => TranslationWhereUniqueInput)
    where!: Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>;

    @Field(() => TranslationCreateWithoutLanguageInput, {nullable:false})
    @Type(() => TranslationCreateWithoutLanguageInput)
    create!: TranslationCreateWithoutLanguageInput;
}
