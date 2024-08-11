import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumFoodDataSourceWithAggregatesFilter } from '../prisma/enum-food-data-source-with-aggregates-filter.input';

@InputType()
export class ImportInfoScalarWhereWithAggregatesInput {

    @Field(() => [ImportInfoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImportInfoScalarWhereWithAggregatesInput>;

    @Field(() => [ImportInfoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImportInfoScalarWhereWithAggregatesInput>;

    @Field(() => [ImportInfoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImportInfoScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sourceVersion?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    importDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumFoodDataSourceWithAggregatesFilter, {nullable:true})
    dataSource?: EnumFoodDataSourceWithAggregatesFilter;
}
