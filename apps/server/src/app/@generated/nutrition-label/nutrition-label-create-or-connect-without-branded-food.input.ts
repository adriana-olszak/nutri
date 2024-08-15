import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionLabelCreateWithoutBrandedFoodInput } from './nutrition-label-create-without-branded-food.input';

@InputType()
export class NutritionLabelCreateOrConnectWithoutBrandedFoodInput {

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:false})
    @Type(() => NutritionLabelWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;

    @Field(() => NutritionLabelCreateWithoutBrandedFoodInput, {nullable:false})
    @Type(() => NutritionLabelCreateWithoutBrandedFoodInput)
    create!: NutritionLabelCreateWithoutBrandedFoodInput;
}
