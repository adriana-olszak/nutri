import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class MeasureUnitScalarWhereWithAggregatesInput {

    @Field(() => [MeasureUnitScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MeasureUnitScalarWhereWithAggregatesInput>;

    @Field(() => [MeasureUnitScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MeasureUnitScalarWhereWithAggregatesInput>;

    @Field(() => [MeasureUnitScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MeasureUnitScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    importInfoId?: StringNullableWithAggregatesFilter;
}
