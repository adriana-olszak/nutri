import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateWithoutFoodInput } from './food-category-on-food-create-without-food.input';
import { Type } from 'class-transformer';
import { FoodCategoryOnFoodCreateOrConnectWithoutFoodInput } from './food-category-on-food-create-or-connect-without-food.input';
import { FoodCategoryOnFoodUpsertWithWhereUniqueWithoutFoodInput } from './food-category-on-food-upsert-with-where-unique-without-food.input';
import { FoodCategoryOnFoodCreateManyFoodInputEnvelope } from './food-category-on-food-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodCategoryOnFoodWhereUniqueInput } from './food-category-on-food-where-unique.input';
import { FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput } from './food-category-on-food-update-with-where-unique-without-food.input';
import { FoodCategoryOnFoodUpdateManyWithWhereWithoutFoodInput } from './food-category-on-food-update-many-with-where-without-food.input';
import { FoodCategoryOnFoodScalarWhereInput } from './food-category-on-food-scalar-where.input';

@InputType()
export class FoodCategoryOnFoodUncheckedUpdateManyWithoutFoodNestedInput {

    @Field(() => [FoodCategoryOnFoodCreateWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateWithoutFoodInput)
    create?: Array<FoodCategoryOnFoodCreateWithoutFoodInput>;

    @Field(() => [FoodCategoryOnFoodCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<FoodCategoryOnFoodCreateOrConnectWithoutFoodInput>;

    @Field(() => [FoodCategoryOnFoodUpsertWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodUpsertWithWhereUniqueWithoutFoodInput)
    upsert?: Array<FoodCategoryOnFoodUpsertWithWhereUniqueWithoutFoodInput>;

    @Field(() => FoodCategoryOnFoodCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => FoodCategoryOnFoodCreateManyFoodInputEnvelope)
    createMany?: FoodCategoryOnFoodCreateManyFoodInputEnvelope;

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

    @Field(() => [FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput)
    update?: Array<FoodCategoryOnFoodUpdateWithWhereUniqueWithoutFoodInput>;

    @Field(() => [FoodCategoryOnFoodUpdateManyWithWhereWithoutFoodInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodUpdateManyWithWhereWithoutFoodInput)
    updateMany?: Array<FoodCategoryOnFoodUpdateManyWithWhereWithoutFoodInput>;

    @Field(() => [FoodCategoryOnFoodScalarWhereInput], {nullable:true})
    @Type(() => FoodCategoryOnFoodScalarWhereInput)
    deleteMany?: Array<FoodCategoryOnFoodScalarWhereInput>;
}
