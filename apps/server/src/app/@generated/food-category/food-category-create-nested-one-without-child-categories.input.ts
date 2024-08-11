import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutChildCategoriesInput } from './food-category-create-without-child-categories.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutChildCategoriesInput } from './food-category-create-or-connect-without-child-categories.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';

@InputType()
export class FoodCategoryCreateNestedOneWithoutChildCategoriesInput {

    @Field(() => FoodCategoryCreateWithoutChildCategoriesInput, {nullable:true})
    @Type(() => FoodCategoryCreateWithoutChildCategoriesInput)
    create?: FoodCategoryCreateWithoutChildCategoriesInput;

    @Field(() => FoodCategoryCreateOrConnectWithoutChildCategoriesInput, {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutChildCategoriesInput)
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutChildCategoriesInput;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;
}
