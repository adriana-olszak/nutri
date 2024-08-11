import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguageRelationFilter } from '../language/language-relation-filter.input';

@InputType()
export class TranslationWhereInput {

    @Field(() => [TranslationWhereInput], {nullable:true})
    AND?: Array<TranslationWhereInput>;

    @Field(() => [TranslationWhereInput], {nullable:true})
    OR?: Array<TranslationWhereInput>;

    @Field(() => [TranslationWhereInput], {nullable:true})
    NOT?: Array<TranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
