import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';
import { FoodPortionUpdateWithoutFoodInput } from './food-portion-update-without-food.input';
import { FoodPortionCreateWithoutFoodInput } from './food-portion-create-without-food.input';

@InputType()
export class FoodPortionUpsertWithWhereUniqueWithoutFoodInput {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => FoodPortionUpdateWithoutFoodInput, {nullable:false})
    @Type(() => FoodPortionUpdateWithoutFoodInput)
    update!: FoodPortionUpdateWithoutFoodInput;

    @Field(() => FoodPortionCreateWithoutFoodInput, {nullable:false})
    @Type(() => FoodPortionCreateWithoutFoodInput)
    create!: FoodPortionCreateWithoutFoodInput;
}
