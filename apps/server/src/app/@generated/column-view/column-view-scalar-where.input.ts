import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ColumnViewScalarWhereInput {

    @Field(() => [ColumnViewScalarWhereInput], {nullable:true})
    AND?: Array<ColumnViewScalarWhereInput>;

    @Field(() => [ColumnViewScalarWhereInput], {nullable:true})
    OR?: Array<ColumnViewScalarWhereInput>;

    @Field(() => [ColumnViewScalarWhereInput], {nullable:true})
    NOT?: Array<ColumnViewScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
