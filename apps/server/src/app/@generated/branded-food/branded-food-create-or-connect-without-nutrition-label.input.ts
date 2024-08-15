import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateWithoutNutritionLabelInput } from './branded-food-create-without-nutrition-label.input';

@InputType()
export class BrandedFoodCreateOrConnectWithoutNutritionLabelInput {

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:false})
    @Type(() => BrandedFoodWhereUniqueInput)
    where!: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodCreateWithoutNutritionLabelInput, {nullable:false})
    @Type(() => BrandedFoodCreateWithoutNutritionLabelInput)
    create!: BrandedFoodCreateWithoutNutritionLabelInput;
}
