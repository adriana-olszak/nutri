import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FoodNutrientScalarWhereInput {

    @Field(() => [FoodNutrientScalarWhereInput], {nullable:true})
    AND?: Array<FoodNutrientScalarWhereInput>;

    @Field(() => [FoodNutrientScalarWhereInput], {nullable:true})
    OR?: Array<FoodNutrientScalarWhereInput>;

    @Field(() => [FoodNutrientScalarWhereInput], {nullable:true})
    NOT?: Array<FoodNutrientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    nutrientId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    min?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    median?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    max?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    confidenceCode?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    importInfoId?: StringNullableFilter;
}
