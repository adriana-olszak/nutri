import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodUpdateWithoutNutritionLabelInput } from './branded-food-update-without-nutrition-label.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateWithoutNutritionLabelInput } from './branded-food-create-without-nutrition-label.input';
import { BrandedFoodWhereInput } from './branded-food-where.input';

@InputType()
export class BrandedFoodUpsertWithoutNutritionLabelInput {

    @Field(() => BrandedFoodUpdateWithoutNutritionLabelInput, {nullable:false})
    @Type(() => BrandedFoodUpdateWithoutNutritionLabelInput)
    update!: BrandedFoodUpdateWithoutNutritionLabelInput;

    @Field(() => BrandedFoodCreateWithoutNutritionLabelInput, {nullable:false})
    @Type(() => BrandedFoodCreateWithoutNutritionLabelInput)
    create!: BrandedFoodCreateWithoutNutritionLabelInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    @Type(() => BrandedFoodWhereInput)
    where?: BrandedFoodWhereInput;
}
