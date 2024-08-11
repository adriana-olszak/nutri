import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateWithoutMeasureUnitInput } from './food-portion-create-without-measure-unit.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateOrConnectWithoutMeasureUnitInput } from './food-portion-create-or-connect-without-measure-unit.input';
import { FoodPortionCreateManyMeasureUnitInputEnvelope } from './food-portion-create-many-measure-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';

@InputType()
export class FoodPortionUncheckedCreateNestedManyWithoutMeasureUnitInput {

    @Field(() => [FoodPortionCreateWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionCreateWithoutMeasureUnitInput)
    create?: Array<FoodPortionCreateWithoutMeasureUnitInput>;

    @Field(() => [FoodPortionCreateOrConnectWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionCreateOrConnectWithoutMeasureUnitInput)
    connectOrCreate?: Array<FoodPortionCreateOrConnectWithoutMeasureUnitInput>;

    @Field(() => FoodPortionCreateManyMeasureUnitInputEnvelope, {nullable:true})
    @Type(() => FoodPortionCreateManyMeasureUnitInputEnvelope)
    createMany?: FoodPortionCreateManyMeasureUnitInputEnvelope;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;
}
