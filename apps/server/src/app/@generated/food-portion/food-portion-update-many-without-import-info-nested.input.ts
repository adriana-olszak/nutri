import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateWithoutImportInfoInput } from './food-portion-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateOrConnectWithoutImportInfoInput } from './food-portion-create-or-connect-without-import-info.input';
import { FoodPortionUpsertWithWhereUniqueWithoutImportInfoInput } from './food-portion-upsert-with-where-unique-without-import-info.input';
import { FoodPortionCreateManyImportInfoInputEnvelope } from './food-portion-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput } from './food-portion-update-with-where-unique-without-import-info.input';
import { FoodPortionUpdateManyWithWhereWithoutImportInfoInput } from './food-portion-update-many-with-where-without-import-info.input';
import { FoodPortionScalarWhereInput } from './food-portion-scalar-where.input';

@InputType()
export class FoodPortionUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [FoodPortionCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionCreateWithoutImportInfoInput)
    create?: Array<FoodPortionCreateWithoutImportInfoInput>;

    @Field(() => [FoodPortionCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodPortionCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [FoodPortionUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<FoodPortionUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => FoodPortionCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodPortionCreateManyImportInfoInputEnvelope)
    createMany?: FoodPortionCreateManyImportInfoInputEnvelope;

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

    @Field(() => [FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [FoodPortionUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<FoodPortionUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [FoodPortionScalarWhereInput], {nullable:true})
    @Type(() => FoodPortionScalarWhereInput)
    deleteMany?: Array<FoodPortionScalarWhereInput>;
}
