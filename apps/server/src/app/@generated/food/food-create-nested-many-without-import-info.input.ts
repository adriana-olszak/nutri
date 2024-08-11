import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutImportInfoInput } from './food-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutImportInfoInput } from './food-create-or-connect-without-import-info.input';
import { FoodCreateManyImportInfoInputEnvelope } from './food-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';

@InputType()
export class FoodCreateNestedManyWithoutImportInfoInput {

    @Field(() => [FoodCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCreateWithoutImportInfoInput)
    create?: Array<FoodCreateWithoutImportInfoInput>;

    @Field(() => [FoodCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodCreateOrConnectWithoutImportInfoInput>;

    @Field(() => FoodCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodCreateManyImportInfoInputEnvelope)
    createMany?: FoodCreateManyImportInfoInputEnvelope;

    @Field(() => [FoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>>;
}
