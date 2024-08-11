import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class FoodPortionScalarWhereWithAggregatesInput {

    @Field(() => [FoodPortionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FoodPortionScalarWhereWithAggregatesInput>;

    @Field(() => [FoodPortionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FoodPortionScalarWhereWithAggregatesInput>;

    @Field(() => [FoodPortionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FoodPortionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    gramWeight?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    portionDescription?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sourceId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    measureUnitName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    importInfoId?: StringWithAggregatesFilter;
}
