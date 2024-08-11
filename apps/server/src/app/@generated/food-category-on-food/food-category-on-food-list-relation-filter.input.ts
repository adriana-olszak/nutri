import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodWhereInput } from './food-category-on-food-where.input';

@InputType()
export class FoodCategoryOnFoodListRelationFilter {

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    every?: FoodCategoryOnFoodWhereInput;

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    some?: FoodCategoryOnFoodWhereInput;

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    none?: FoodCategoryOnFoodWhereInput;
}
