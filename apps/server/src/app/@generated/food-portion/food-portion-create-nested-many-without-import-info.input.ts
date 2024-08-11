import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateWithoutImportInfoInput } from './food-portion-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodPortionCreateOrConnectWithoutImportInfoInput } from './food-portion-create-or-connect-without-import-info.input';
import { FoodPortionCreateManyImportInfoInputEnvelope } from './food-portion-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';

@InputType()
export class FoodPortionCreateNestedManyWithoutImportInfoInput {

    @Field(() => [FoodPortionCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionCreateWithoutImportInfoInput)
    create?: Array<FoodPortionCreateWithoutImportInfoInput>;

    @Field(() => [FoodPortionCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodPortionCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodPortionCreateOrConnectWithoutImportInfoInput>;

    @Field(() => FoodPortionCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodPortionCreateManyImportInfoInputEnvelope)
    createMany?: FoodPortionCreateManyImportInfoInputEnvelope;

    @Field(() => [FoodPortionWhereUniqueInput], {nullable:true})
    @Type(() => FoodPortionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>>;
}
