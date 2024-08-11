import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class NutrientScalarWhereWithAggregatesInput {

    @Field(() => [NutrientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NutrientScalarWhereWithAggregatesInput>;

    @Field(() => [NutrientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NutrientScalarWhereWithAggregatesInput>;

    @Field(() => [NutrientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NutrientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    unitName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sourceId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    importInfoId?: StringWithAggregatesFilter;
}
