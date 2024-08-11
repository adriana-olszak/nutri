import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutBrandedFoodInput } from './food-create-without-branded-food.input';

@InputType()
export class FoodCreateOrConnectWithoutBrandedFoodInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => FoodCreateWithoutBrandedFoodInput)
    create!: FoodCreateWithoutBrandedFoodInput;
}
