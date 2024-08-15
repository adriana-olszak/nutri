import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';

@InputType()
export class RecipeIngredientScalarWhereInput {

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    partId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quantity?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    quantityText?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    minQuantity?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    maxQuantity?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    unit?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    unitText?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ingredientText?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    extraInfo?: StringNullableFilter;
}
