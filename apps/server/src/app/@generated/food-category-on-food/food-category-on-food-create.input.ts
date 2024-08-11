import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateNestedOneWithoutCategoriesInput } from '../food/food-create-nested-one-without-categories.input';
import { FoodCategoryCreateNestedOneWithoutFoodsInput } from '../food-category/food-category-create-nested-one-without-foods.input';

@InputType()
export class FoodCategoryOnFoodCreateInput {

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;

    @Field(() => FoodCreateNestedOneWithoutCategoriesInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutCategoriesInput;

    @Field(() => FoodCategoryCreateNestedOneWithoutFoodsInput, {nullable:false})
    category!: FoodCategoryCreateNestedOneWithoutFoodsInput;
}
