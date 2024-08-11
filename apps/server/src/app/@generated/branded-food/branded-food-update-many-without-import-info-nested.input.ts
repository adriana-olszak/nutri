import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateWithoutImportInfoInput } from './branded-food-create-without-import-info.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateOrConnectWithoutImportInfoInput } from './branded-food-create-or-connect-without-import-info.input';
import { BrandedFoodUpsertWithWhereUniqueWithoutImportInfoInput } from './branded-food-upsert-with-where-unique-without-import-info.input';
import { BrandedFoodCreateManyImportInfoInputEnvelope } from './branded-food-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';
import { BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput } from './branded-food-update-with-where-unique-without-import-info.input';
import { BrandedFoodUpdateManyWithWhereWithoutImportInfoInput } from './branded-food-update-many-with-where-without-import-info.input';
import { BrandedFoodScalarWhereInput } from './branded-food-scalar-where.input';

@InputType()
export class BrandedFoodUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [BrandedFoodCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodCreateWithoutImportInfoInput)
    create?: Array<BrandedFoodCreateWithoutImportInfoInput>;

    @Field(() => [BrandedFoodCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<BrandedFoodCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [BrandedFoodUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<BrandedFoodUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => BrandedFoodCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => BrandedFoodCreateManyImportInfoInputEnvelope)
    createMany?: BrandedFoodCreateManyImportInfoInputEnvelope;

    @Field(() => [BrandedFoodWhereUniqueInput], {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>>;

    @Field(() => [BrandedFoodWhereUniqueInput], {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>>;

    @Field(() => [BrandedFoodWhereUniqueInput], {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>>;

    @Field(() => [BrandedFoodWhereUniqueInput], {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>>;

    @Field(() => [BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<BrandedFoodUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [BrandedFoodUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<BrandedFoodUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [BrandedFoodScalarWhereInput], {nullable:true})
    @Type(() => BrandedFoodScalarWhereInput)
    deleteMany?: Array<BrandedFoodScalarWhereInput>;
}
