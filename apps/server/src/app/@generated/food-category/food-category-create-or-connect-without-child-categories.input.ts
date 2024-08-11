import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateWithoutChildCategoriesInput } from './food-category-create-without-child-categories.input';

@InputType()
export class FoodCategoryCreateOrConnectWithoutChildCategoriesInput {

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryCreateWithoutChildCategoriesInput, {nullable:false})
    @Type(() => FoodCategoryCreateWithoutChildCategoriesInput)
    create!: FoodCategoryCreateWithoutChildCategoriesInput;
}
