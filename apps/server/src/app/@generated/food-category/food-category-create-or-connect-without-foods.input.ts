import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodCategoryWhereUniqueInput } from './food-category-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCategoryCreateWithoutFoodsInput } from './food-category-create-without-foods.input';

@InputType()
export class FoodCategoryCreateOrConnectWithoutFoodsInput {

    @Field(() => FoodCategoryWhereUniqueInput, {nullable:false})
    @Type(() => FoodCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<FoodCategoryWhereUniqueInput, 'id' | 'code' | 'description' | 'sourceId'>;

    @Field(() => FoodCategoryCreateWithoutFoodsInput, {nullable:false})
    @Type(() => FoodCategoryCreateWithoutFoodsInput)
    create!: FoodCategoryCreateWithoutFoodsInput;
}
