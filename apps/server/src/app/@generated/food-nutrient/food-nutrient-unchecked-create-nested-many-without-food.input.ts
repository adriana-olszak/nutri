import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateWithoutFoodInput } from './food-nutrient-create-without-food.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateOrConnectWithoutFoodInput } from './food-nutrient-create-or-connect-without-food.input';
import { FoodNutrientCreateManyFoodInputEnvelope } from './food-nutrient-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';

@InputType()
export class FoodNutrientUncheckedCreateNestedManyWithoutFoodInput {

    @Field(() => [FoodNutrientCreateWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientCreateWithoutFoodInput)
    create?: Array<FoodNutrientCreateWithoutFoodInput>;

    @Field(() => [FoodNutrientCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => FoodNutrientCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<FoodNutrientCreateOrConnectWithoutFoodInput>;

    @Field(() => FoodNutrientCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => FoodNutrientCreateManyFoodInputEnvelope)
    createMany?: FoodNutrientCreateManyFoodInputEnvelope;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;
}
