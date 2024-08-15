import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';
import { Type } from 'class-transformer';
import { BrandedFoodUpdateWithoutNutritionLabelInput } from './branded-food-update-without-nutrition-label.input';

@InputType()
export class BrandedFoodUpdateToOneWithWhereWithoutNutritionLabelInput {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodUpdateWithoutNutritionLabelInput, {nullable:false})
    @Type(() => BrandedFoodUpdateWithoutNutritionLabelInput)
    data!: BrandedFoodUpdateWithoutNutritionLabelInput;
}
