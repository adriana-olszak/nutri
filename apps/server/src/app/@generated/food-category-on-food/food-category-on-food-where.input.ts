import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FoodRelationFilter } from '../food/food-relation-filter.input';
import { FoodCategoryRelationFilter } from '../food-category/food-category-relation-filter.input';

@InputType()
export class FoodCategoryOnFoodWhereInput {

    @Field(() => [FoodCategoryOnFoodWhereInput], {nullable:true})
    AND?: Array<FoodCategoryOnFoodWhereInput>;

    @Field(() => [FoodCategoryOnFoodWhereInput], {nullable:true})
    OR?: Array<FoodCategoryOnFoodWhereInput>;

    @Field(() => [FoodCategoryOnFoodWhereInput], {nullable:true})
    NOT?: Array<FoodCategoryOnFoodWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    foodId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPrimaryCategory?: BoolFilter;

    @Field(() => FoodRelationFilter, {nullable:true})
    food?: FoodRelationFilter;

    @Field(() => FoodCategoryRelationFilter, {nullable:true})
    category?: FoodCategoryRelationFilter;
}
