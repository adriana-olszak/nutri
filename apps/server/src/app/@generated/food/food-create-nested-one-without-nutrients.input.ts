import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutNutrientsInput } from './food-create-without-nutrients.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutNutrientsInput } from './food-create-or-connect-without-nutrients.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedOneWithoutNutrientsInput {

    @Field(() => FoodCreateWithoutNutrientsInput, {nullable:true})
    @Type(() => FoodCreateWithoutNutrientsInput)
    create?: FoodCreateWithoutNutrientsInput;

    @Field(() => FoodCreateOrConnectWithoutNutrientsInput, {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutNutrientsInput)
    connectOrCreate?: FoodCreateOrConnectWithoutNutrientsInput;

    @Field(() => FoodWhereUniqueInput, {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;
}
