import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RecipePartScalarWhereWithAggregatesInput {

    @Field(() => [RecipePartScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipePartScalarWhereWithAggregatesInput>;

    @Field(() => [RecipePartScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipePartScalarWhereWithAggregatesInput>;

    @Field(() => [RecipePartScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipePartScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;
}
