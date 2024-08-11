import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodSearchVectorWhereUniqueInput } from './food-search-vector-where-unique.input';
import { Type } from 'class-transformer';
import { FoodSearchVectorUpdateWithoutFoodInput } from './food-search-vector-update-without-food.input';

@InputType()
export class FoodSearchVectorUpdateWithWhereUniqueWithoutFoodInput {

    @Field(() => FoodSearchVectorWhereUniqueInput, {nullable:false})
    @Type(() => FoodSearchVectorWhereUniqueInput)
    where!: Prisma.AtLeast<FoodSearchVectorWhereUniqueInput, 'id' | 'foodId_languageCode'>;

    @Field(() => FoodSearchVectorUpdateWithoutFoodInput, {nullable:false})
    @Type(() => FoodSearchVectorUpdateWithoutFoodInput)
    data!: FoodSearchVectorUpdateWithoutFoodInput;
}
