import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateWithoutNutritionLabelInput } from './branded-food-create-without-nutrition-label.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateOrConnectWithoutNutritionLabelInput } from './branded-food-create-or-connect-without-nutrition-label.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';

@InputType()
export class BrandedFoodCreateNestedOneWithoutNutritionLabelInput {

    @Field(() => BrandedFoodCreateWithoutNutritionLabelInput, {nullable:true})
    @Type(() => BrandedFoodCreateWithoutNutritionLabelInput)
    create?: BrandedFoodCreateWithoutNutritionLabelInput;

    @Field(() => BrandedFoodCreateOrConnectWithoutNutritionLabelInput, {nullable:true})
    @Type(() => BrandedFoodCreateOrConnectWithoutNutritionLabelInput)
    connectOrCreate?: BrandedFoodCreateOrConnectWithoutNutritionLabelInput;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;
}
