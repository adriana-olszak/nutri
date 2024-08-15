import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { Type } from 'class-transformer';
import { NutritionLabelUpdateWithoutBrandedFoodInput } from './nutrition-label-update-without-branded-food.input';

@InputType()
export class NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput {

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;

    @Field(() => NutritionLabelUpdateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => NutritionLabelUpdateWithoutBrandedFoodInput)
    data!: NutritionLabelUpdateWithoutBrandedFoodInput;
}
