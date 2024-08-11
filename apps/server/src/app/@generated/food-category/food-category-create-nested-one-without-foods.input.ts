import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutFoodsInput } from './food-category-create-without-foods.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutFoodsInput } from './food-category-create-or-connect-without-foods.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';

@InputType()
export class FoodCategoryCreateNestedOneWithoutFoodsInput {

    @Field(() => FoodCategoryCreateWithoutFoodsInput, {nullable:true})
    @Type(() => FoodCategoryCreateWithoutFoodsInput)
    create?: FoodCategoryCreateWithoutFoodsInput;

    @Field(() => FoodCategoryCreateOrConnectWithoutFoodsInput, {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutFoodsInput)
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutFoodsInput;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;
}
