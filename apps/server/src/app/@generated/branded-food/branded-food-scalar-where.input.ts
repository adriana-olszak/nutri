import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';

@InputType()
export class BrandedFoodScalarWhereInput {

    @Field(() => [BrandedFoodScalarWhereInput], {nullable:true})
    AND?: Array<BrandedFoodScalarWhereInput>;

    @Field(() => [BrandedFoodScalarWhereInput], {nullable:true})
    OR?: Array<BrandedFoodScalarWhereInput>;

    @Field(() => [BrandedFoodScalarWhereInput], {nullable:true})
    NOT?: Array<BrandedFoodScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brandOwner?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gtinUpc?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ingredients?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    servingSize?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    servingUnit?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;
}
