import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput } from '../food-category-on-food/food-category-on-food-create-nested-many-without-category.input';
import { ImportInfoCreateNestedOneWithoutFoodCategoriesInput } from '../import-info/import-info-create-nested-one-without-food-categories.input';
import { FoodCategoryCreateNestedOneWithoutChildCategoriesInput } from './food-category-create-nested-one-without-child-categories.input';

@InputType()
export class FoodCategoryCreateWithoutChildCategoriesInput {

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

    @Field(() => ImportInfoCreateNestedOneWithoutFoodCategoriesInput, {nullable:true})
    importInfo?: ImportInfoCreateNestedOneWithoutFoodCategoriesInput;

    @Field(() => FoodCategoryCreateNestedOneWithoutChildCategoriesInput, {nullable:true})
    parentCategory?: FoodCategoryCreateNestedOneWithoutChildCategoriesInput;
}
