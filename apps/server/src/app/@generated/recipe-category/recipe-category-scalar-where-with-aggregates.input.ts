import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RecipeCategoryScalarWhereWithAggregatesInput {

    @Field(() => [RecipeCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
