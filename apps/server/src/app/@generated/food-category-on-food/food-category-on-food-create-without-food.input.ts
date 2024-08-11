import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateNestedOneWithoutFoodsInput } from '../food-category/food-category-create-nested-one-without-foods.input';

@InputType()
export class FoodCategoryOnFoodCreateWithoutFoodInput {

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;

    @Field(() => FoodCategoryCreateNestedOneWithoutFoodsInput, {nullable:false})
    category!: FoodCategoryCreateNestedOneWithoutFoodsInput;
}
