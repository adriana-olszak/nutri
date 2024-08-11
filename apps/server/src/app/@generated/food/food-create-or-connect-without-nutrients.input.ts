import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodCreateWithoutNutrientsInput } from './food-create-without-nutrients.input';

@InputType()
export class FoodCreateOrConnectWithoutNutrientsInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodCreateWithoutNutrientsInput, {nullable:false})
    @Type(() => FoodCreateWithoutNutrientsInput)
    create!: FoodCreateWithoutNutrientsInput;
}
