import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Food } from '../food/food.model';
import { FoodCategory } from '../food-category/food-category.model';

@ObjectType()
export class FoodCategoryOnFood {

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPrimaryCategory!: boolean;

    @Field(() => Food, {nullable:false})
    food?: Food;

    @Field(() => FoodCategory, {nullable:false})
    category?: FoodCategory;
}
