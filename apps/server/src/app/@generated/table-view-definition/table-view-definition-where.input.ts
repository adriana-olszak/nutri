import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ColumnViewListRelationFilter } from '../column-view/column-view-list-relation-filter.input';

@InputType()
export class TableViewDefinitionWhereInput {

    @Field(() => [TableViewDefinitionWhereInput], {nullable:true})
    AND?: Array<TableViewDefinitionWhereInput>;

    @Field(() => [TableViewDefinitionWhereInput], {nullable:true})
    OR?: Array<TableViewDefinitionWhereInput>;

    @Field(() => [TableViewDefinitionWhereInput], {nullable:true})
    NOT?: Array<TableViewDefinitionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tableId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tableType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    filters?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sorting?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPreset?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isShared?: BoolFilter;

    @Field(() => ColumnViewListRelationFilter, {nullable:true})
    ColumnView?: ColumnViewListRelationFilter;
}
