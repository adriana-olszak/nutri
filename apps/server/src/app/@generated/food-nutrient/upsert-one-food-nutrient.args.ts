import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateInput } from './food-nutrient-create.input';
import { FoodNutrientUpdateInput } from './food-nutrient-update.input';

@ArgsType()
export class UpsertOneFoodNutrientArgs {

    @Field(() => FoodNutrientWhereUniqueInput, {nullable:false})
    @Type(() => FoodNutrientWhereUniqueInput)
    where!: Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>;

    @Field(() => FoodNutrientCreateInput, {nullable:false})
    @Type(() => FoodNutrientCreateInput)
    create!: FoodNutrientCreateInput;

    @Field(() => FoodNutrientUpdateInput, {nullable:false})
    @Type(() => FoodNutrientUpdateInput)
    update!: FoodNutrientUpdateInput;
}
