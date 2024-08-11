import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class FoodCategoryOnFoodScalarWhereWithAggregatesInput {

    @Field(() => [FoodCategoryOnFoodScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FoodCategoryOnFoodScalarWhereWithAggregatesInput>;

    @Field(() => [FoodCategoryOnFoodScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FoodCategoryOnFoodScalarWhereWithAggregatesInput>;

    @Field(() => [FoodCategoryOnFoodScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FoodCategoryOnFoodScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    foodId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPrimaryCategory?: BoolWithAggregatesFilter;
}
