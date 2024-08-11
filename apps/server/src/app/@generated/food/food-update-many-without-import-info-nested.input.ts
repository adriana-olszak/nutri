import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCreateWithoutImportInfoInput } from './food-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodCreateOrConnectWithoutImportInfoInput } from './food-create-or-connect-without-import-info.input';
import { FoodUpsertWithWhereUniqueWithoutImportInfoInput } from './food-upsert-with-where-unique-without-import-info.input';
import { FoodCreateManyImportInfoInputEnvelope } from './food-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { FoodUpdateWithWhereUniqueWithoutImportInfoInput } from './food-update-with-where-unique-without-import-info.input';
import { FoodUpdateManyWithWhereWithoutImportInfoInput } from './food-update-many-with-where-without-import-info.input';
import { FoodScalarWhereInput } from './food-scalar-where.input';

@InputType()
export class FoodUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [FoodCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCreateWithoutImportInfoInput)
    create?: Array<FoodCreateWithoutImportInfoInput>;

    @Field(() => [FoodCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [FoodUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<FoodUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => FoodCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodCreateManyImportInfoInputEnvelope)
    createMany?: FoodCreateManyImportInfoInputEnvelope;

    @Field(() => [FoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [FoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [FoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [FoodWhereUniqueInput], {nullable:true})
    @Type(() => FoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [FoodUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<FoodUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [FoodUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<FoodUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [FoodScalarWhereInput], {nullable:true})
    @Type(() => FoodScalarWhereInput)
    deleteMany?: Array<FoodScalarWhereInput>;
}
