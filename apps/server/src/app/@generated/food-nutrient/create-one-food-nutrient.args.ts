import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientCreateInput } from './food-nutrient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFoodNutrientArgs {

    @Field(() => FoodNutrientCreateInput, {nullable:false})
    @Type(() => FoodNutrientCreateInput)
    data!: FoodNutrientCreateInput;
}
