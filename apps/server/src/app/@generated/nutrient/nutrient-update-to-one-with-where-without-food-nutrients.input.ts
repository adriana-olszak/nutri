import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';
import { Type } from 'class-transformer';
import { NutrientUpdateWithoutFoodNutrientsInput } from './nutrient-update-without-food-nutrients.input';

@InputType()
export class NutrientUpdateToOneWithWhereWithoutFoodNutrientsInput {

    @Field(() => NutrientWhereInput, {nullable:true})
    @Type(() => NutrientWhereInput)
    where?: NutrientWhereInput;

    @Field(() => NutrientUpdateWithoutFoodNutrientsInput, {nullable:false})
    @Type(() => NutrientUpdateWithoutFoodNutrientsInput)
    data!: NutrientUpdateWithoutFoodNutrientsInput;
}
