import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientWhereInput } from './food-nutrient-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFoodNutrientArgs {

    @Field(() => FoodNutrientWhereInput, {nullable:true})
    @Type(() => FoodNutrientWhereInput)
    where?: FoodNutrientWhereInput;
}
