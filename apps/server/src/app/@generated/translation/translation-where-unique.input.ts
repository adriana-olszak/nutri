import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TranslationLanguageCodeEntityTypeEntityIdFieldCompoundUniqueInput } from './translation-language-code-entity-type-entity-id-field-compound-unique.input';
import { TranslationWhereInput } from './translation-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguageRelationFilter } from '../language/language-relation-filter.input';

@InputType()
export class TranslationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TranslationLanguageCodeEntityTypeEntityIdFieldCompoundUniqueInput, {nullable:true})
    languageCode_entityType_entityId_field?: TranslationLanguageCodeEntityTypeEntityIdFieldCompoundUniqueInput;

    @Field(() => [TranslationWhereInput], {nullable:true})
    AND?: Array<TranslationWhereInput>;

    @Field(() => [TranslationWhereInput], {nullable:true})
    OR?: Array<TranslationWhereInput>;

    @Field(() => [TranslationWhereInput], {nullable:true})
    NOT?: Array<TranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    entityType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entityId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    field?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    languageCode?: StringFilter;

    @Field(() => LanguageRelationFilter, {nullable:true})
    language?: LanguageRelationFilter;
}
