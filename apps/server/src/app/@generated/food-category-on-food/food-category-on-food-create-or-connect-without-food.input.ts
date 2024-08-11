import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateWithoutFoodInput } from './food-category-on-food-create-without-food.input';

@InputType()
export class FoodCategoryOnFoodCreateOrConnectWithoutFoodInput {

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;

    @Field(() => FoodCategoryOnFoodCreateWithoutFoodInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateWithoutFoodInput)
    create!: FoodCategoryOnFoodCreateWithoutFoodInput;
}
