import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodCreateWithoutImportInfoInput } from './branded-food-create-without-import-info.input';
import { Type } from 'class-transformer';
import { BrandedFoodCreateOrConnectWithoutImportInfoInput } from './branded-food-create-or-connect-without-import-info.input';
import { BrandedFoodCreateManyImportInfoInputEnvelope } from './branded-food-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BrandedFoodWhereUniqueInput } from './branded-food-where-unique.input';

@InputType()
export class BrandedFoodUncheckedCreateNestedManyWithoutImportInfoInput {

    @Field(() => [BrandedFoodCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodCreateWithoutImportInfoInput)
    create?: Array<BrandedFoodCreateWithoutImportInfoInput>;

    @Field(() => [BrandedFoodCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => BrandedFoodCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<BrandedFoodCreateOrConnectWithoutImportInfoInput>;

    @Field(() => BrandedFoodCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => BrandedFoodCreateManyImportInfoInputEnvelope)
    createMany?: BrandedFoodCreateManyImportInfoInputEnvelope;

    @Field(() => [BrandedFoodWhereUniqueInput], {nullable:true})
    @Type(() => BrandedFoodWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BrandedFoodWhereUniqueInput, 'id' | 'foodId'>>;
}
