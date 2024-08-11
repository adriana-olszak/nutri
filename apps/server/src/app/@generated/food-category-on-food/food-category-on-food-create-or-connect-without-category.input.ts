import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateWithoutCategoryInput } from './food-category-on-food-create-without-category.input';

@InputType()
export class FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput {

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;

    @Field(() => FoodCategoryOnFoodCreateWithoutCategoryInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateWithoutCategoryInput)
    create!: FoodCategoryOnFoodCreateWithoutCategoryInput;
}
