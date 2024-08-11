import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    partId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    quantity?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    unit?: StringWithAggregatesFilter;
}
