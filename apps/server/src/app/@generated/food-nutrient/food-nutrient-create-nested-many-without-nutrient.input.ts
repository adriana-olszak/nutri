import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateWithoutNutrientInput } from './food-nutrient-create-without-nutrient.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateOrConnectWithoutNutrientInput } from './food-nutrient-create-or-connect-without-nutrient.input';
import { FoodNutrientCreateManyNutrientInputEnvelope } from './food-nutrient-create-many-nutrient-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';

@InputType()
export class FoodNutrientCreateNestedManyWithoutNutrientInput {

    @Field(() => [FoodNutrientCreateWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientCreateWithoutNutrientInput)
    create?: Array<FoodNutrientCreateWithoutNutrientInput>;

    @Field(() => [FoodNutrientCreateOrConnectWithoutNutrientInput], {nullable:true})
    @Type(() => FoodNutrientCreateOrConnectWithoutNutrientInput)
    connectOrCreate?: Array<FoodNutrientCreateOrConnectWithoutNutrientInput>;

    @Field(() => FoodNutrientCreateManyNutrientInputEnvelope, {nullable:true})
    @Type(() => FoodNutrientCreateManyNutrientInputEnvelope)
    createMany?: FoodNutrientCreateManyNutrientInputEnvelope;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;
}
