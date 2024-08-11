import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateWithoutMeasureUnitsInput } from './import-info-create-without-measure-units.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateOrConnectWithoutMeasureUnitsInput } from './import-info-create-or-connect-without-measure-units.input';
import { ImportInfoUpsertWithoutMeasureUnitsInput } from './import-info-upsert-without-measure-units.input';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput } from './import-info-update-to-one-with-where-without-measure-units.input';

@InputType()
export class ImportInfoUpdateOneRequiredWithoutMeasureUnitsNestedInput {

    @Field(() => ImportInfoCreateWithoutMeasureUnitsInput, {nullable:true})
    @Type(() => ImportInfoCreateWithoutMeasureUnitsInput)
    create?: ImportInfoCreateWithoutMeasureUnitsInput;

    @Field(() => ImportInfoCreateOrConnectWithoutMeasureUnitsInput, {nullable:true})
    @Type(() => ImportInfoCreateOrConnectWithoutMeasureUnitsInput)
    connectOrCreate?: ImportInfoCreateOrConnectWithoutMeasureUnitsInput;

    @Field(() => ImportInfoUpsertWithoutMeasureUnitsInput, {nullable:true})
    @Type(() => ImportInfoUpsertWithoutMeasureUnitsInput)
    upsert?: ImportInfoUpsertWithoutMeasureUnitsInput;

    @Field(() => ImportInfoWhereUniqueInput, {nullable:true})
    @Type(() => ImportInfoWhereUniqueInput)
    connect?: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput, {nullable:true})
    @Type(() => ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput)
    update?: ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput;
}
