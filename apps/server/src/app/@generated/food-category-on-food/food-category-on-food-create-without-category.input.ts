import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateNestedOneWithoutCategoriesInput } from '../food/food-create-nested-one-without-categories.input';

@InputType()
export class FoodCategoryOnFoodCreateWithoutCategoryInput {

    @Field(() => Boolean, {nullable:true})
    isPrimaryCategory?: boolean;

    @Field(() => FoodCreateNestedOneWithoutCategoriesInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutCategoriesInput;
}
