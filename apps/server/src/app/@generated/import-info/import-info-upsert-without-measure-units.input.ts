import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoUpdateWithoutMeasureUnitsInput } from './import-info-update-without-measure-units.input';
import { Type } from 'class-transformer';
import { ImportInfoCreateWithoutMeasureUnitsInput } from './import-info-create-without-measure-units.input';
import { ImportInfoWhereInput } from './import-info-where.input';

@InputType()
export class ImportInfoUpsertWithoutMeasureUnitsInput {

    @Field(() => ImportInfoUpdateWithoutMeasureUnitsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutMeasureUnitsInput)
    update!: ImportInfoUpdateWithoutMeasureUnitsInput;

    @Field(() => ImportInfoCreateWithoutMeasureUnitsInput, {nullable:false})
    @Type(() => ImportInfoCreateWithoutMeasureUnitsInput)
    create!: ImportInfoCreateWithoutMeasureUnitsInput;

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;
}
