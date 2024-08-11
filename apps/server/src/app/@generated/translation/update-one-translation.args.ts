import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TranslationUpdateInput } from './translation-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TranslationWhereUniqueInput } from './translation-where-unique.input';

@ArgsType()
export class UpdateOneTranslationArgs {

    @Field(() => TranslationUpdateInput, {nullable:false})
    @Type(() => TranslationUpdateInput)
    data!: TranslationUpdateInput;

    @Field(() => TranslationWhereUniqueInput, {nullable:false})
    @Type(() => TranslationWhereUniqueInput)
    where!: Prisma.AtLeast<TranslationWhereUniqueInput, 'id' | 'languageCode_entityType_entityId_field'>;
}
