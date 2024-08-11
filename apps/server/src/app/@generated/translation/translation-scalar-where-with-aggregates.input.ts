import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TranslationScalarWhereWithAggregatesInput {

    @Field(() => [TranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TranslationScalarWhereWithAggregatesInput>;

    @Field(() => [TranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TranslationScalarWhereWithAggregatesInput>;

    @Field(() => [TranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    entityType?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    entityId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    field?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    languageCode?: StringWithAggregatesFilter;
}
