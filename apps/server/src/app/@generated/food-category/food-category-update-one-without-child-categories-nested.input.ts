import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutChildCategoriesInput } from './food-category-create-without-child-categories.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutChildCategoriesInput } from './food-category-create-or-connect-without-child-categories.input';
import { FoodCategoryUpsertWithoutChildCategoriesInput } from './food-category-upsert-without-child-categories.input';
import { FoodCategoryWhereInput } from './food-category-where.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput } from './food-category-update-to-one-with-where-without-child-categories.input';

@InputType()
export class FoodCategoryUpdateOneWithoutChildCategoriesNestedInput {

    @Field(() => FoodCategoryCreateWithoutChildCategoriesInput, {nullable:true})
    @Type(() => FoodCategoryCreateWithoutChildCategoriesInput)
    create?: FoodCategoryCreateWithoutChildCategoriesInput;

    @Field(() => FoodCategoryCreateOrConnectWithoutChildCategoriesInput, {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutChildCategoriesInput)
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutChildCategoriesInput;

    @Field(() => FoodCategoryUpsertWithoutChildCategoriesInput, {nullable:true})
    @Type(() => FoodCategoryUpsertWithoutChildCategoriesInput)
    upsert?: FoodCategoryUpsertWithoutChildCategoriesInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    disconnect?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    @Type(() => FoodCategoryWhereInput)
    delete?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput, {nullable:true})
    @Type(() => FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput)
    update?: FoodCategoryUpdateToOneWithWhereWithoutChildCategoriesInput;
}
