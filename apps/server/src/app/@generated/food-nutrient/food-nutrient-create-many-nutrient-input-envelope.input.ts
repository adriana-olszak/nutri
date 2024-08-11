import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateManyNutrientInput } from './food-nutrient-create-many-nutrient.input';
import { Type } from 'class-transformer';

@InputType()
export class FoodNutrientCreateManyNutrientInputEnvelope {

    @Field(() => [FoodNutrientCreateManyNutrientInput], {nullable:false})
    @Type(() => FoodNutrientCreateManyNutrientInput)
    data!: Array<FoodNutrientCreateManyNutrientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
