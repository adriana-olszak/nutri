import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateWithoutCategoryInput } from './food-category-on-food-create-without-category.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput } from './food-category-on-food-create-or-connect-without-category.input';
import { FoodCategoryOnFoodCreateManyCategoryInputEnvelope } from './food-category-on-food-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';

@InputType()
export class FoodCategoryOnFoodUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [FoodCategoryOnFoodCreateWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateWithoutCategoryInput)
    create?: Array<FoodCategoryOnFoodCreateWithoutCategoryInput>;

    @Field(() => [FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput>;

    @Field(() => FoodCategoryOnFoodCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateManyCategoryInputEnvelope)
    createMany?: FoodCategoryOnFoodCreateManyCategoryInputEnvelope;

    @Field(() => [FoodCategoryOnFoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>>;
}
