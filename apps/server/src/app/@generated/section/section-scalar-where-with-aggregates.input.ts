import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class SectionScalarWhereWithAggregatesInput {

    @Field(() => [SectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SectionScalarWhereWithAggregatesInput>;

    @Field(() => [SectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SectionScalarWhereWithAggregatesInput>;

    @Field(() => [SectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SectionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionnaireVersionId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;
}
