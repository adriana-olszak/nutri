import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientUpdateInput } from './food-nutrient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';

@ArgsType()
export class UpdateOneFoodNutrientArgs {

    @Field(() => FoodNutrientUpdateInput, {nullable:false})
    @Type(() => FoodNutrientUpdateInput)
    data!: FoodNutrientUpdateInput;

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;
}
