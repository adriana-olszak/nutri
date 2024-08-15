import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionLabelCreateWithoutBrandedFoodInput } from './nutrition-label-create-without-branded-food.input';
import { Type } from 'class-transformer';
import { NutritionLabelCreateOrConnectWithoutBrandedFoodInput } from './nutrition-label-create-or-connect-without-branded-food.input';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';

@InputType()
export class NutritionLabelCreateNestedOneWithoutBrandedFoodInput {

    @Field(() => NutritionLabelCreateWithoutBrandedFoodInput, {nullable:true})
    @Type(() => NutritionLabelCreateWithoutBrandedFoodInput)
    create?: NutritionLabelCreateWithoutBrandedFoodInput;

    @Field(() => NutritionLabelCreateOrConnectWithoutBrandedFoodInput, {nullable:true})
    @Type(() => NutritionLabelCreateOrConnectWithoutBrandedFoodInput)
    connectOrCreate?: NutritionLabelCreateOrConnectWithoutBrandedFoodInput;

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:true})
    @Type(() => NutritionLabelWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;
}
