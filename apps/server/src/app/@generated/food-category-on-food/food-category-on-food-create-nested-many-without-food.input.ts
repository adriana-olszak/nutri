import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateWithoutFoodInput } from './food-category-on-food-create-without-food.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateOrConnectWithoutFoodInput } from './food-category-on-food-create-or-connect-without-food.input';
import { FoodCategoryOnFoodCreateManyFoodInputEnvelope } from './food-category-on-food-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';

@InputType()
export class FoodCategoryOnFoodCreateNestedManyWithoutFoodInput {

    @Field(() => [FoodCategoryOnFoodCreateWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateWithoutFoodInput)
    create?: Array<FoodCategoryOnFoodCreateWithoutFoodInput>;

    @Field(() => [FoodCategoryOnFoodCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<FoodCategoryOnFoodCreateOrConnectWithoutFoodInput>;

    @Field(() => FoodCategoryOnFoodCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateManyFoodInputEnvelope)
    createMany?: FoodCategoryOnFoodCreateManyFoodInputEnvelope;

    @Field(() => [FoodCategoryOnFoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>>;
}
