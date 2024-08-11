import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';
import { Type } from 'class-transformer';
import { TranslationCreateInput } from './translation-create.input';
import { TranslationUpdateInput } from './translation-update.input';

@ArgsType()
export class UpsertOneTranslationArgs {

    @Field(() => TranslationWhereUniqueInput, {nullable:false})
    @Type(() => TranslationWhereUniqueInput)
    where!: Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>;

    @Field(() => TranslationCreateInput, {nullable:false})
    @Type(() => TranslationCreateInput)
    create!: TranslationCreateInput;

    @Field(() => TranslationUpdateInput, {nullable:false})
    @Type(() => TranslationUpdateInput)
    update!: TranslationUpdateInput;
}
