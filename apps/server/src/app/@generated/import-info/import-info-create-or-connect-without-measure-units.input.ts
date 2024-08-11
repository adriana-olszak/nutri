import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImportInfoWhereUniqueInput } from './import-info-where-unique.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutMeasureUnitsInput } from './import-info-create-without-measure-units.input';

@InputType()
export class ImportInfoCreateOrConnectWithoutMeasureUnitsInput {

    @Field(() => ImportInfoWhereUniqueInput, {nullable:false})
    @Type(() => ImportInfoWhereUniqueInput)
    where!: Prisma.AtLeast<ImportInfoWhereUniqueInput, 'id' | 'dataSource_sourceVersion'>;

    @Field(() => ImportInfoCreateWithoutMeasureUnitsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutMeasureUnitsInput)
    create!: ImportInfoCreateWithoutMeasureUnitsInput;
}
