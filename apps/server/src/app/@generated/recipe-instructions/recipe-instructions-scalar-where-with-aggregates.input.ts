import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRecipeInstructionsTypeWithAggregatesFilter } from '../prisma/enum-recipe-instructions-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class RecipeInstructionsScalarWhereWithAggregatesInput {

    @Field(() => [RecipeInstructionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeInstructionsScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeInstructionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeInstructionsScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeInstructionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeInstructionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => EnumRecipeInstructionsTypeWithAggregatesFilter, {nullable:true})
    type?: EnumRecipeInstructionsTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    listIndex?: IntNullableWithAggregatesFilter;
}
