import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class RecipeImageScalarWhereWithAggregatesInput {

    @Field(() => [RecipeImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeImageScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeImageScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeImageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    altText?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    width?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    height?: IntNullableWithAggregatesFilter;
}
