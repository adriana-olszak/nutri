import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryCreateWithoutFoodsInput } from './food-category-create-without-foods.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateOrConnectWithoutFoodsInput } from './food-category-create-or-connect-without-foods.input';
import { FoodCategoryUpsertWithoutFoodsInput } from './food-category-upsert-without-foods.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { FoodCategoryUpdateToOneWithWhereWithoutFoodsInput } from './food-category-update-to-one-with-where-without-foods.input';

@InputType()
export class FoodCategoryUpdateOneRequiredWithoutFoodsNestedInput {

    @Field(() => FoodCategoryCreateWithoutFoodsInput, {nullable:true})
    @Type(() => FoodCategoryCreateWithoutFoodsInput)
    create?: FoodCategoryCreateWithoutFoodsInput;

    @Field(() => FoodCategoryCreateOrConnectWithoutFoodsInput, {nullable:true})
    @Type(() => FoodCategoryCreateOrConnectWithoutFoodsInput)
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutFoodsInput;

    @Field(() => FoodCategoryUpsertWithoutFoodsInput, {nullable:true})
    @Type(() => FoodCategoryUpsertWithoutFoodsInput)
    upsert?: FoodCategoryUpsertWithoutFoodsInput;

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:true})
    @Type(() => FoodCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryUpdateToOneWithWhereWithoutFoodsInput, {nullable:true})
    @Type(() => FoodCategoryUpdateToOneWithWhereWithoutFoodsInput)
    update?: FoodCategoryUpdateToOneWithWhereWithoutFoodsInput;
}
