import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationCreateWithoutLanguageInput } from './translation-create-without-language.input';
import { Type } from 'class-transformer';
import { TranslationCreateOrConnectWithoutLanguageInput } from './translation-create-or-connect-without-language.input';
import { TranslationUpsertWithWhereUniqueWithoutLanguageInput } from './translation-upsert-with-where-unique-without-language.input';
import { TranslationCreateManyLanguageInputEnvelope } from './translation-create-many-language-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';
import { TranslationUpdateWithWhereUniqueWithoutLanguageInput } from './translation-update-with-where-unique-without-language.input';
import { TranslationUpdateManyWithWhereWithoutLanguageInput } from './translation-update-many-with-where-without-language.input';
import { TranslationScalarWhereInput } from './translation-scalar-where.input';

@InputType()
export class TranslationUpdateManyWithoutLanguageNestedInput {

    @Field(() => [TranslationCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationCreateWithoutLanguageInput)
    create?: Array<TranslationCreateWithoutLanguageInput>;

    @Field(() => [TranslationCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TranslationCreateOrConnectWithoutLanguageInput>;

    @Field(() => [TranslationUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<TranslationUpsertWithWhereUniqueWithoutLanguageInput>;

    @Field(() => TranslationCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TranslationCreateManyLanguageInputEnvelope)
    createMany?: TranslationCreateManyLanguageInputEnvelope;

    @Field(() => [TranslationWhereUniqueInput], {nullable:true})
    @Type(() => TranslationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>>;

    @Field(() => [TranslationWhereUniqueInput], {nullable:true})
    @Type(() => TranslationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>>;

    @Field(() => [TranslationWhereUniqueInput], {nullable:true})
    @Type(() => TranslationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>>;

    @Field(() => [TranslationWhereUniqueInput], {nullable:true})
    @Type(() => TranslationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>>;

    @Field(() => [TranslationUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<TranslationUpdateWithWhereUniqueWithoutLanguageInput>;

    @Field(() => [TranslationUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => TranslationUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<TranslationUpdateManyWithWhereWithoutLanguageInput>;

    @Field(() => [TranslationScalarWhereInput], {nullable:true})
    @Type(() => TranslationScalarWhereInput)
    deleteMany?: Array<TranslationScalarWhereInput>;
}
