import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateWithoutFoodInput } from './food-portion-create-without-food.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateOrConnectWithoutFoodInput } from './food-portion-create-or-connect-without-food.input';
import { FoodPortionUpsertWithWhereUniqueWithoutFoodInput } from './food-portion-upsert-with-where-unique-without-food.input';
import { FoodPortionCreateManyFoodInputEnvelope } from './food-portion-create-many-food-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { FoodPortionUpdateWithWhereUniqueWithoutFoodInput } from './food-portion-update-with-where-unique-without-food.input';
import { FoodPortionUpdateManyWithWhereWithoutFoodInput } from './food-portion-update-many-with-where-without-food.input';
import { FoodPortionScalarWhereInput } from './food-portion-scalar-where.input';

@InputType()
export class FoodPortionUpdateManyWithoutFoodNestedInput {

    @Field(() => [FoodPortionCreateWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionCreateWithoutFoodInput)
    create?: Array<FoodPortionCreateWithoutFoodInput>;

    @Field(() => [FoodPortionCreateOrConnectWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionCreateOrConnectWithoutFoodInput)
    connectOrCreate?: Array<FoodPortionCreateOrConnectWithoutFoodInput>;

    @Field(() => [FoodPortionUpsertWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionUpsertWithWhereUniqueWithoutFoodInput)
    upsert?: Array<FoodPortionUpsertWithWhereUniqueWithoutFoodInput>;

    @Field(() => FoodPortionCreateManyFoodInputEnvelope, {nullable:true})
    @Type(() => FoodPortionCreateManyFoodInputEnvelope)
    createMany?: FoodPortionCreateManyFoodInputEnvelope;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;

    @Field(() => [FoodPortionUpdateWithWhereUniqueWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionUpdateWithWhereUniqueWithoutFoodInput)
    update?: Array<FoodPortionUpdateWithWhereUniqueWithoutFoodInput>;

    @Field(() => [FoodPortionUpdateManyWithWhereWithoutFoodInput], {nullable:true})
    @Type(() => FoodPortionUpdateManyWithWhereWithoutFoodInput)
    updateMany?: Array<FoodPortionUpdateManyWithWhereWithoutFoodInput>;

    @Field(() => [FoodPortionScalarWhereInput], {nullable:true})
    @Type(() => FoodPortionScalarWhereInput)
    deleteMany?: Array<FoodPortionScalarWhereInput>;
}
