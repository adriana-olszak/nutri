import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutFoodsInput } from './import-info-create-without-foods.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutFoodsInput } from './import-info-create-or-connect-without-foods.input';
import { ImportInfoUpsertWithoutFoodsInput } from './import-info-upsert-without-foods.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutFoodsInput } from './import-info-update-to-one-with-where-without-foods.input';

@InputType()
export class ImportInfoUpdateOneRequiredWithoutFoodsNestedInput {

    @Field(() => ImportInfoCreateWithoutFoodsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutFoodsInput)
    create?: ImportInfoCreateWithoutFoodsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutFoodsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutFoodsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutFoodsInput;

    @Field(() => ImportInfoUpsertWithoutFoodsInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutFoodsInput)
    upsert?: ImportInfoUpsertWithoutFoodsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutFoodsInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutFoodsInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutFoodsInput;
}
