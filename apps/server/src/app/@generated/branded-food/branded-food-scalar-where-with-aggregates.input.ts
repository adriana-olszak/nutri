import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';

@InputType()
export class BrandedFoodScalarWhereWithAggregatesInput {

    @Field(() => [BrandedFoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BrandedFoodScalarWhereWithAggregatesInput>;

    @Field(() => [BrandedFoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BrandedFoodScalarWhereWithAggregatesInput>;

    @Field(() => [BrandedFoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BrandedFoodScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brandOwner?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    gtinUpc?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ingredients?: StringNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    servingSize?: FloatNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    servingUnit?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sourceId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    importInfoId?: StringNullableWithAggregatesFilter;
}
