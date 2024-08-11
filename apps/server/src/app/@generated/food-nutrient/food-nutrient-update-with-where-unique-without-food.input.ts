import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { FoodNutrientUpdateWithoutFoodInput } from './food-nutrient-update-without-food.input';

@InputType()
export class FoodNutrientUpdateWithWhereUniqueWithoutFoodInput {

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => FoodNutrientUpdateWithoutFoodInput, {nullable:false})
    @Type(() => FoodNutrientUpdateWithoutFoodInput)
    data!: FoodNutrientUpdateWithoutFoodInput;
}
