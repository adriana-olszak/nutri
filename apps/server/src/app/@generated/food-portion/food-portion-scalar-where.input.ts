import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class FoodPortionScalarWhereInput {

    @Field(() => [FoodPortionScalarWhereInput], {nullable:true})
    AND?: Array<FoodPortionScalarWhereInput>;

    @Field(() => [FoodPortionScalarWhereInput], {nullable:true})
    OR?: Array<FoodPortionScalarWhereInput>;

    @Field(() => [FoodPortionScalarWhereInput], {nullable:true})
    NOT?: Array<FoodPortionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    gramWeight?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    portionDescription?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    measureUnitName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    importInfoId?: StringFilter;
}
