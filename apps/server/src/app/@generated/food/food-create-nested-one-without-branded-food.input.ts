import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutBrandedFoodInput } from './food-create-without-branded-food.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutBrandedFoodInput } from './food-create-or-connect-without-branded-food.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedOneWithoutBrandedFoodInput {

    @Field(() => FoodCreateWithoutBrandedFoodInput, {nullable:true})
    @Type(() => FoodCreateWithoutBrandedFoodInput)
    create?: FoodCreateWithoutBrandedFoodInput;

    @Field(() => FoodCreateOrConnectWithoutBrandedFoodInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutBrandedFoodInput)
    connectOrCreate?: FoodCreateOrConnectWithoutBrandedFoodInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;
}
