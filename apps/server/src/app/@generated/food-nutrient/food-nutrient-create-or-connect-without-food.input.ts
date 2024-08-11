import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateWithoutFoodInput } from './food-nutrient-create-without-food.input';

@InputType()
export class FoodNutrientCreateOrConnectWithoutFoodInput {

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => FoodNutrientCreateWithoutFoodInput, {nullable:false})
    @Type(() => FoodNutrientCreateWithoutFoodInput)
    create!: FoodNutrientCreateWithoutFoodInput;
}
