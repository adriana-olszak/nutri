import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientUpdateWithoutFoodNutrientsInput } from './nutrient-update-without-food-nutrients.input';
import { Type } from 'class-transformer';
import { NutrientCreateWithoutFoodNutrientsInput } from './nutrient-create-without-food-nutrients.input';
import { NutrientWhereInput } from './nutrient-where.input';

@InputType()
export class NutrientUpsertWithoutFoodNutrientsInput {

    @Field(() => NutrientUpdateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => NutrientUpdateWithoutFoodNutrientsInput)
    update!: NutrientUpdateWithoutFoodNutrientsInput;

    @Field(() => NutrientCreateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => NutrientCreateWithoutFoodNutrientsInput)
    create!: NutrientCreateWithoutFoodNutrientsInput;

    @Field(() => NutrientWhereInput, {nullable:true})
    @Type(() => NutrientWhereInput)
    where?: NutrientWhereInput;
}
