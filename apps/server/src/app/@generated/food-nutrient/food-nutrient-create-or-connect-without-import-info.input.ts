import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateWithoutImportInfoInput } from './food-nutrient-create-without-import-info.input';

@InputType()
export class FoodNutrientCreateOrConnectWithoutImportInfoInput {

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => FoodNutrientCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodNutrientCreateWithoutImportInfoInput)
    create!: FoodNutrientCreateWithoutImportInfoInput;
}
