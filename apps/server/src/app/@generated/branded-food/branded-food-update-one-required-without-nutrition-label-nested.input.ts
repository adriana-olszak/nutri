import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateWithoutNutritionLabelInput } from './branded-food-create-without-nutrition-label.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateOrConnectWithoutNutritionLabelInput } from './branded-food-create-or-connect-without-nutrition-label.input';
import { BrandedFoodUpsertWithoutNutritionLabelInput } from './branded-food-upsert-without-nutrition-label.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { BrandedFoodUpdateToOneWithWhereWithoutNutritionLabelInput } from './branded-food-update-to-one-with-where-without-nutrition-label.input';

@InputType()
export class BrandedFoodUpdateOneRequiredWithoutNutritionLabelNestedInput {

    @Field(() => BrandedFoodCreateWithoutNutritionLabelInput, {nullable:true})
    @Type(() => BrandedFoodCreateWithoutNutritionLabelInput)
    create?: BrandedFoodCreateWithoutNutritionLabelInput;

    @Field(() => BrandedFoodCreateOrConnectWithoutNutritionLabelInput, {nullable:true})
    @Type(() => BrandedFoodCreateOrConnectWithoutNutritionLabelInput)
    connectOrCreate?: BrandedFoodCreateOrConnectWithoutNutritionLabelInput;

    @Field(() => BrandedFoodUpsertWithoutNutritionLabelInput, {nullable:true})
    @Type(() => BrandedFoodUpsertWithoutNutritionLabelInput)
    upsert?: BrandedFoodUpsertWithoutNutritionLabelInput;

    @Field(() => BrandedFoodWhereUniqueInput, {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>;

    @Field(() => BrandedFoodUpdateToOneWithWhereWithoutNutritionLabelInput, {nullable:true})
    @Type(() => BrandedFoodUpdateToOneWithWhereWithoutNutritionLabelInput)
    update?: BrandedFoodUpdateToOneWithWhereWithoutNutritionLabelInput;
}
