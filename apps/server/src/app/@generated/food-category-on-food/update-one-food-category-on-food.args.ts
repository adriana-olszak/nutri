import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodUpdateInput } from './food-category-on-food-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';

@ArgsType()
export class UpdateOneFoodCategoryOnFoodArgs {

    @Field(() => FoodCategoryOnFoodUpdateInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodUpdateInput)
    data!: FoodCategoryOnFoodUpdateInput;

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;
}
