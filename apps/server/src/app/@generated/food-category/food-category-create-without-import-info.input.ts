import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput } from '../food-category-on-food/food-category-on-food-create-nested-many-without-category.input';
import { FoodCategoryCreateNestedOneWithoutChildCategoriesInput } from './food-category-create-nested-one-without-child-categories.input';
import { FoodCategoryCreateNestedManyWithoutParentCategoryInput } from './food-category-create-nested-many-without-parent-category.input';

@InputType()
export class FoodCategoryCreateWithoutImportInfoInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput, {nullable:true})
    foods?: FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput;

    @Field(() => FoodCategoryCreateNestedOneWithoutChildCategoriesInput, {nullable:true})
    parentCategory?: FoodCategoryCreateNestedOneWithoutChildCategoriesInput;

    @Field(() => FoodCategoryCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    childCategories?: FoodCategoryCreateNestedManyWithoutParentCategoryInput;
}
