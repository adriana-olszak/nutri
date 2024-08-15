import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionLabelCreateWithoutBrandedFoodInput } from './nutrition-label-create-without-branded-food.input';
import { Type } from 'class-transformer';
import { NutritionLabelCreateOrConnectWithoutBrandedFoodInput } from './nutrition-label-create-or-connect-without-branded-food.input';
import { NutritionLabelUpsertWithoutBrandedFoodInput } from './nutrition-label-upsert-without-branded-food.input';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';
import { Prisma } from '@prisma/client';
import { NutritionLabelWhereUniqueInput } from './nutrition-label-where-unique.input';
import { NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput } from './nutrition-label-update-to-one-with-where-without-branded-food.input';

@InputType()
export class NutritionLabelUncheckedUpdateOneWithoutBrandedFoodNestedInput {

    @Field(() => NutritionLabelCreateWithoutBrandedFoodInput, {nullable:true})
    @Type(() => NutritionLabelCreateWithoutBrandedFoodInput)
    create?: NutritionLabelCreateWithoutBrandedFoodInput;

    @Field(() => NutritionLabelCreateOrConnectWithoutBrandedFoodInput, {nullable:true})
    @Type(() => NutritionLabelCreateOrConnectWithoutBrandedFoodInput)
    connectOrCreate?: NutritionLabelCreateOrConnectWithoutBrandedFoodInput;

    @Field(() => NutritionLabelUpsertWithoutBrandedFoodInput, {nullable:true})
    @Type(() => NutritionLabelUpsertWithoutBrandedFoodInput)
    upsert?: NutritionLabelUpsertWithoutBrandedFoodInput;

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    disconnect?: NutritionLabelWhereInput;

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    @Type(() => NutritionLabelWhereInput)
    delete?: NutritionLabelWhereInput;

    @Field(() => NutritionLabelWhereUniqueInput, {nullable:true})
    @Type(() => NutritionLabelWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionLabelWhereUniqueInput, 'id' | 'brandedFoodId'>;

    @Field(() => NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput, {nullable:true})
    @Type(() => NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput)
    update?: NutritionLabelUpdateToOneWithWhereWithoutBrandedFoodInput;
}
