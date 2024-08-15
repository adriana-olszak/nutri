import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeScalarWhereInput {

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    AND?: Array<RecipeScalarWhereInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    OR?: Array<RecipeScalarWhereInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourceId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourceUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cookingTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    prepTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    servingsText?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    servingsMin?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    servingsMax?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
