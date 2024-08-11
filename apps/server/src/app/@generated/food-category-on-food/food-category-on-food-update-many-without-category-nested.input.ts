import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateWithoutCategoryInput } from './food-category-on-food-create-without-category.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput } from './food-category-on-food-create-or-connect-without-category.input';
import { FoodCategoryOnFoodUpsertWithWhereUniqueWithoutCategoryInput } from './food-category-on-food-upsert-with-where-unique-without-category.input';
import { FoodCategoryOnFoodCreateManyCategoryInputEnvelope } from './food-category-on-food-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput } from './food-category-on-food-update-with-where-unique-without-category.input';
import { FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput } from './food-category-on-food-update-many-with-where-without-category.input';
import { FoodCategoryOnFoodScalarWhereInput } from './food-category-on-food-scalar-where.input';

@InputType()
export class FoodCategoryOnFoodUpdateManyWithoutCategoryNestedInput {

    @Field(() => [FoodCategoryOnFoodCreateWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateWithoutCategoryInput)
    create?: Array<FoodCategoryOnFoodCreateWithoutCategoryInput>;

    @Field(() => [FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<FoodCategoryOnFoodCreateOrConnectWithoutCategoryInput>;

    @Field(() => [FoodCategoryOnFoodUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<FoodCategoryOnFoodUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => FoodCategoryOnFoodCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateManyCategoryInputEnvelope)
    createMany?: FoodCategoryOnFoodCreateManyCategoryInputEnvelope;

    @Field(() => [FoodCategoryOnFoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>>;

    @Field(() => [FoodCategoryOnFoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>>;

    @Field(() => [FoodCategoryOnFoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>>;

    @Field(() => [FoodCategoryOnFoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodCategoryOnFoodWhereUniqueInput, 'foodId_categoryId'>>;

    @Field(() => [FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<FoodCategoryOnFoodUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<FoodCategoryOnFoodUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [FoodCategoryOnFoodScalarWhereInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodScalarWhereInput)
    deleteMany?: Array<FoodCategoryOnFoodScalarWhereInput>;
}
