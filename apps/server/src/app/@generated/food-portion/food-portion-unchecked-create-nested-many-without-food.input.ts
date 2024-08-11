import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateWithoutFoodInput } from './food-portion-create-without-food.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateOrConnectWithoutFoodInput } from './food-portion-create-or-connect-without-food.input';
import { FoodPortionCreateManyFoodInputEnvelope } from './food-portion-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';

@InputType()
export class FoodPortionUncheckedCreateNestedManyWithoutFoodInput {

    @Field(() => [FoodPortionCreateWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionCreateWithoutFoodInput)
    create?: Array<FoodPortionCreateWithoutFoodInput>;

    @Field(() => [FoodPortionCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<FoodPortionCreateOrConnectWithoutFoodInput>;

    @Field(() => FoodPortionCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => FoodPortionCreateManyFoodInputEnvelope)
    createMany?: FoodPortionCreateManyFoodInputEnvelope;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;
}
