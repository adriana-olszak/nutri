import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { FoodNutrientUpdateWithoutNutrientInput } from './food-nutrient-update-without-nutrient.input';
import { FoodNutrientCreateWithoutNutrientInput } from './food-nutrient-create-without-nutrient.input';

@InputType()
export class FoodNutrientUpsertWithWhereUniqueWithoutNutrientInput {

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => FoodNutrientUpdateWithoutNutrientInput, {nullable:false})
    @Type(() => FoodNutrientUpdateWithoutNutrientInput)
    update!: FoodNutrientUpdateWithoutNutrientInput;

    @Field(() => FoodNutrientCreateWithoutNutrientInput, {nullable:false})
    @Type(() => FoodNutrientCreateWithoutNutrientInput)
    create!: FoodNutrientCreateWithoutNutrientInput;
}
