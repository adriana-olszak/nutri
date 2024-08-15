import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColumnViewWhereInput } from './column-view-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { TableViewDefinitionRelationFilter } from '../table-view-definition/table-view-definition-relation-filter.input';

@InputType()
export class ColumnViewWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ColumnViewWhereInput], {nullable:true})
    AND?: Array<ColumnViewWhereInput>;

    @Field(() => [ColumnViewWhereInput], {nullable:true})
    OR?: Array<ColumnViewWhereInput>;

    @Field(() => [ColumnViewWhereInput], {nullable:true})
    NOT?: Array<ColumnViewWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    columnId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    columnType?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    width?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    visible?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    filter?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tableViewDefinitionId?: StringFilter;

    @Field(() => TableViewDefinitionRelationFilter, {nullable:true})
    tableViewDefinition?: TableViewDefinitionRelationFilter;
}
