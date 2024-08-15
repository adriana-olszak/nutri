import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ColumnViewScalarWhereWithAggregatesInput {

    @Field(() => [ColumnViewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ColumnViewScalarWhereWithAggregatesInput>;

    @Field(() => [ColumnViewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ColumnViewScalarWhereWithAggregatesInput>;

    @Field(() => [ColumnViewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ColumnViewScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    columnId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    columnType?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    width?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    visible?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    filter?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tableViewDefinitionId?: StringWithAggregatesFilter;
}
