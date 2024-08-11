import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutBrandedFoodInput } from './food-create-without-branded-food.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutBrandedFoodInput } from './food-create-or-connect-without-branded-food.input';
import { FoodUpsertWithoutBrandedFoodInput } from './food-upsert-without-branded-food.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateToOneWithWhereWithoutBrandedFoodInput } from './food-update-to-one-with-where-without-branded-food.input';

@InputType()
export class FoodUpdateOneRequiredWithoutBrandedFoodNestedInput {

    @Field(() => FoodCreateWithoutBrandedFoodInput, {nullable:true})
    @Type(() => FoodCreateWithoutBrandedFoodInput)
    create?: FoodCreateWithoutBrandedFoodInput;

    @Field(() => FoodCreateOrConnectWithoutBrandedFoodInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutBrandedFoodInput)
    connectOrCreate?: FoodCreateOrConnectWithoutBrandedFoodInput;

    @Field(() => FoodUpsertWithoutBrandedFoodInput, {nullable:true})
    @Type(() => FoodUpsertWithoutBrandedFoodInput)
    upsert?: FoodUpsertWithoutBrandedFoodInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateToOneWithWhereWithoutBrandedFoodInput, {nullable:true})
    @Type(() => FoodUpdateToOneWithWhereWithoutBrandedFoodInput)
    update?: FoodUpdateToOneWithWhereWithoutBrandedFoodInput;
}
