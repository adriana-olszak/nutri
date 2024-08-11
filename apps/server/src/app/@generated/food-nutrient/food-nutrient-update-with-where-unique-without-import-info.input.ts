import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { FoodNutrientUpdateWithoutImportInfoInput } from './food-nutrient-update-without-import-info.input';

@InputType()
export class FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput {

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => FoodNutrientUpdateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodNutrientUpdateWithoutImportInfoInput)
    data!: FoodNutrientUpdateWithoutImportInfoInput;
}
