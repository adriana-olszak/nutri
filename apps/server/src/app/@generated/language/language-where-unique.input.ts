import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguageWhereInput } from './language-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TranslationListRelationFilter } from '../translation/translation-list-relation-filter.input';
import { FoodSearchVectorListRelationFilter } from '../food-search-vector/food-search-vector-list-relation-filter.input';

@InputType()
export class LanguageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;

    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => TranslationListRelationFilter, {nullable:true})
    translations?: TranslationListRelationFilter;

    @Field(() => FoodSearchVectorListRelationFilter, {nullable:true})
    searchVectors?: FoodSearchVectorListRelationFilter;
}
