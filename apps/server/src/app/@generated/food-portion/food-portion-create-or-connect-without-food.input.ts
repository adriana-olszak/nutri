import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateWithoutFoodInput } from './food-portion-create-without-food.input';

@InputType()
export class FoodPortionCreateOrConnectWithoutFoodInput {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => FoodPortionCreateWithoutFoodInput, {nullable:false})
    @Type(() => FoodPortionCreateWithoutFoodInput)
    create!: FoodPortionCreateWithoutFoodInput;
}
