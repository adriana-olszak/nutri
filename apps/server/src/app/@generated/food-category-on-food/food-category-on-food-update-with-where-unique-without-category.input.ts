import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodUpdateWithoutCategoryInput } from './food-category-on-food-update-without-category.input';

@InputType()
export class FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;

    @Field(() => FoodCategoryOnFoodUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodUpdateWithoutCategoryInput)
    data!: FoodCategoryOnFoodUpdateWithoutCategoryInput;
}
