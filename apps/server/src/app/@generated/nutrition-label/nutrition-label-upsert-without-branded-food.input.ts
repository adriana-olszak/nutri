import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionLabelUpdateWithoutBrandedFoodInput } from './nutrition-label-update-without-branded-food.input';
import { Type } from 'class-transformer';
import { NutritionLabelCreateWithoutBrandedFoodInput } from './nutrition-label-create-without-branded-food.input';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';

@InputType()
export class NutritionLabelUpsertWithoutBrandedFoodInput {

    @Field(() => NutritionLabelUpdateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => NutritionLabelUpdateWithoutBrandedFoodInput)
    update!: NutritionLabelUpdateWithoutBrandedFoodInput;

    @Field(() => NutritionLabelCreateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => NutritionLabelCreateWithoutBrandedFoodInput)
    create!: NutritionLabelCreateWithoutBrandedFoodInput;

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    where?: NutritionLabelWhereInput;
}
