import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class FoodCategoryScalarWhereWithAggregatesInput {

    @Field(() => [FoodCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FoodCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [FoodCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FoodCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [FoodCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FoodCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    code?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    parentCategoryId?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sourceId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    importInfoId?: StringWithAggregatesFilter;
}
