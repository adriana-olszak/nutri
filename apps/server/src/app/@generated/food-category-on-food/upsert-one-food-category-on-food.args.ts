import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateInput } from './food-category-on-food-create.input';
import { FoodCategoryOnFoodUpdateInput } from './food-category-on-food-update.input';

@ArgsType()
export class UpsertOneFoodCategoryOnFoodArgs {

    @Field(() => FoodCategoryOnFoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>;

    @Field(() => FoodCategoryOnFoodCreateInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateInput)
    create!: FoodCategoryOnFoodCreateInput;

    @Field(() => FoodCategoryOnFoodUpdateInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodUpdateInput)
    update!: FoodCategoryOnFoodUpdateInput;
}
