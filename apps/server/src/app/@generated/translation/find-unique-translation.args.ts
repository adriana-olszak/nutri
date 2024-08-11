import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTranslationArgs {

    @Field(() => TranslationWhereUniqueInput, {nullable:false})
    @Type(() => TranslationWhereUniqueInput)
    where!: Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>;
}
