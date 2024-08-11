import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationCreateWithoutLanguageInput } from './translation-create-without-language.input';
import { Type } from 'class-transformer';
import { TranslationCreateOrConnectWithoutLanguageInput } from './translation-create-or-connect-without-language.input';
import { TranslationCreateManyLanguageInputEnvelope } from './translation-create-many-language-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';

@InputType()
export class TranslationUncheckedCreateNestedManyWithoutLanguageInput {

    @Field(() => [TranslationCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationCreateWithoutLanguageInput)
    create?: Array<TranslationCreateWithoutLanguageInput>;

    @Field(() => [TranslationCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TranslationCreateOrConnectWithoutLanguageInput>;

    @Field(() => TranslationCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TranslationCreateManyLanguageInputEnvelope)
    createMany?: TranslationCreateManyLanguageInputEnvelope;

    @Field(() => [TranslationWhereUniqueInput], {nullable:true})
    @Type(() => TranslationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>>;
}
