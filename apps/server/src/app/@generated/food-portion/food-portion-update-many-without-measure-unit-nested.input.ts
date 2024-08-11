import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateWithoutMeasureUnitInput } from './food-portion-create-without-measure-unit.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateOrConnectWithoutMeasureUnitInput } from './food-portion-create-or-connect-without-measure-unit.input';
import { FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput } from './food-portion-upsert-with-where-unique-without-measure-unit.input';
import { FoodPortionCreateManyMeasureUnitInputEnvelope } from './food-portion-create-many-measure-unit-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { FoodPortionUpdateWithWhereUniqueWithoutMeasureUnitInput } from './food-portion-update-with-where-unique-without-measure-unit.input';
import { FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput } from './food-portion-update-many-with-where-without-measure-unit.input';
import { FoodPortionScalarWhereInput } from './food-portion-scalar-where.input';

@InputType()
export class FoodPortionUpdateManyWithoutMeasureUnitNestedInput {

    @Field(() => [FoodPortionCreateWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionCreateWithoutMeasureUnitInput)
    create?: Array<FoodPortionCreateWithoutMeasureUnitInput>;

    @Field(() => [FoodPortionCreateOrConnectWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionCreateOrConnectWithoutMeasureUnitInput)
    connectOrCreate?: Array<FoodPortionCreateOrConnectWithoutMeasureUnitInput>;

    @Field(() => [FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput)
    upsert?: Array<FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput>;

    @Field(() => FoodPortionCreateManyMeasureUnitInputEnvelope, {nullable:true})
    @Type(() => FoodPortionCreateManyMeasureUnitInputEnvelope)
    createMany?: FoodPortionCreateManyMeasureUnitInputEnvelope;

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

    @Field(() => [FoodPortionUpdateWithWhereUniqueWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionUpdateWithWhereUniqueWithoutMeasureUnitInput)
    update?: Array<FoodPortionUpdateWithWhereUniqueWithoutMeasureUnitInput>;

    @Field(() => [FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput], {nullable:true})
    @Type(() => FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput)
    updateMany?: Array<FoodPortionUpdateManyWithWhereWithoutMeasureUnitInput>;

    @Field(() => [FoodPortionScalarWhereInput], {nullable:true})
    @Type(() => FoodPortionScalarWhereInput)
    deleteMany?: Array<FoodPortionScalarWhereInput>;
}
