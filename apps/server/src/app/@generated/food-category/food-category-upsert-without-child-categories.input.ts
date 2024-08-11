import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryUpdateWithoutChildCategoriesInput } from './food-category-update-without-child-categories.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateWithoutChildCategoriesInput } from './food-category-create-without-child-categories.input';
import { FoodCategoryWhereInput } from './food-category-where.input';

@InputType()
export class FoodCategoryUpsertWithoutChildCategoriesInput {

    @Field(() => FoodCategoryUpdateWithoutChildCategoriesInput, {nullable:false})
    @Type(() => FoodCategoryUpdateWithoutChildCategoriesInput)
    update!: FoodCategoryUpdateWithoutChildCategoriesInput;

    @Field(() => FoodCategoryCreateWithoutChildCategoriesInput, {nullable:false})
    @Type(() => FoodCategoryCreateWithoutChildCategoriesInput)
    create!: FoodCategoryCreateWithoutChildCategoriesInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    where?: FoodCategoryWhereInput;
}
