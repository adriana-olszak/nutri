import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutBrandedFoodsInput } from './import-info-create-without-branded-foods.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutBrandedFoodsInput } from './import-info-create-or-connect-without-branded-foods.input';
import { ImportInfoUpsertWithoutBrandedFoodsInput } from './import-info-upsert-without-branded-foods.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput } from './import-info-update-to-one-with-where-without-branded-foods.input';

@InputType()
export class ImportInfoUpdateOneRequiredWithoutBrandedFoodsNestedInput {

    @Field(() => ImportInfoCreateWithoutBrandedFoodsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutBrandedFoodsInput)
    create?: ImportInfoCreateWithoutBrandedFoodsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutBrandedFoodsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutBrandedFoodsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutBrandedFoodsInput;

    @Field(() => ImportInfoUpsertWithoutBrandedFoodsInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutBrandedFoodsInput)
    upsert?: ImportInfoUpsertWithoutBrandedFoodsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutBrandedFoodsInput;
}
