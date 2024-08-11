import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateManyFoodInput } from './food-nutrient-create-many-food.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodNutrientCreateManyFoodInputEnvelope {

    @Field(() => [FoodNutrientCreateManyFoodInput], {nullable:false})
    @Type(() => FoodNutrientCreateManyFoodInput)
    data!: Array<FoodNutrientCreateManyFoodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
