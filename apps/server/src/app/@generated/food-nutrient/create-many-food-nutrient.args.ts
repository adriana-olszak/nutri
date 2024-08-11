import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodNutrientCreateManyInput } from './food-nutrient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFoodNutrientArgs {

    @Field(() => [FoodNutrientCreateManyInput], {nullable:false})
    @Type(() => FoodNutrientCreateManyInput)
    data!: Array<FoodNutrientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
