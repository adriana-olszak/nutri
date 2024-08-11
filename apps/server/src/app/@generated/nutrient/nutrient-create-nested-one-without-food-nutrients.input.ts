import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientCreateWithoutFoodNutrientsInput } from './nutrient-create-without-food-nutrients.input';
import { Type } from 'class-transformer';
import { NutrientCreateOrConnectWithoutFoodNutrientsInput } from './nutrient-create-or-connect-without-food-nutrients.input';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';

@InputType()
export class NutrientCreateNestedOneWithoutFoodNutrientsInput {

    @Field(() => NutrientCreateWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => NutrientCreateWithoutFoodNutrientsInput)
    create?: NutrientCreateWithoutFoodNutrientsInput;

    @Field(() => NutrientCreateOrConnectWithoutFoodNutrientsInput, {nullable:true})
    @Type(() => NutrientCreateOrConnectWithoutFoodNutrientsInput)
    connectOrCreate?: NutrientCreateOrConnectWithoutFoodNutrientsInput;

    @Field(() => NutrientWhereUniqueInput, {nullable:true})
    @Type(() => NutrientWhereUniqueInput)
    connect?: Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>;
}
