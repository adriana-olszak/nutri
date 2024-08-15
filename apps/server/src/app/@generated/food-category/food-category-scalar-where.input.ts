import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class FoodCategoryScalarWhereInput {

    @Field(() => [FoodCategoryScalarWhereInput], {nullable:true})
    AND?: Array<FoodCategoryScalarWhereInput>;

    @Field(() => [FoodCategoryScalarWhereInput], {nullable:true})
    OR?: Array<FoodCategoryScalarWhereInput>;

    @Field(() => [FoodCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<FoodCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentCategoryId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    sourceId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    importInfoId?: StringNullableFilter;
}
