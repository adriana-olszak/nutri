import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodUpdateWithoutFoodInput } from './food-category-on-food-update-without-food.input';

@InputType()
export class FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput {

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;

    @Field(() => FoodCategoryOnFoodUpdateWithoutFoodInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodUpdateWithoutFoodInput)
    data!: FoodCategoryOnFoodUpdateWithoutFoodInput;
}
