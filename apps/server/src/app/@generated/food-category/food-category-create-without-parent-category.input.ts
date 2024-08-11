import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateNestedManyWithoutCategoryInput } from '../food-category-on-food/food-category-on-food-create-nested-many-without-category.input';
import { ImportInfoCreateNestedOneWithoutFoodCategoriesInput } from '../import-info/import-info-create-nested-one-without-food-categories.input';
import { FoodCategoryCreateNestedManyWithoutParentCategoryInput } from './food-category-create-nested-many-without-parent-category.input';

@InputType()
export class FoodCategoryCreateWithoutParentCategoryInput {

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

    @Field(() => ImportInfoCreateNestedOneWithoutFoodCategoriesInput, {nullable:false})
    importInfo!: ImportInfoCreateNestedOneWithoutFoodCategoriesInput;

    @Field(() => FoodCategoryCreateNestedManyWithoutParentCategoryInput, {nullable:true})
    childCategories?: FoodCategoryCreateNestedManyWithoutParentCategoryInput;
}
