import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { NutrientCreateWithoutFoodNutrientsInput } from './nutrient-create-without-food-nutrients.input';

@InputType()
export class NutrientCreateOrConnectWithoutFoodNutrientsInput {

    @Field(() => NutrientWhereUniqueInput, {nullable:false})
    @Type(() => NutrientWhereUniqueInput)
    where!: Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => NutrientCreateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => NutrientCreateWithoutFoodNutrientsInput)
    create!: NutrientCreateWithoutFoodNutrientsInput;
}
