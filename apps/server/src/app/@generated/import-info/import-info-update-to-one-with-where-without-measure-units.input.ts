import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoWhereInput } from './import-info-where.input';
import { Type } from 'class-transformer';
import { ImportInfoUpdateWithoutMeasureUnitsInput } from './import-info-update-without-measure-units.input';

@InputType()
export class ImportInfoUpdateToOneWithWhereWithoutMeasureUnitsInput {

    @Field(() => ImportInfoWhereInput, {nullable:true})
    @Type(() => ImportInfoWhereInput)
    where?: ImportInfoWhereInput;

    @Field(() => ImportInfoUpdateWithoutMeasureUnitsInput, {nullable:false})
    @Type(() => ImportInfoUpdateWithoutMeasureUnitsInput)
    data!: ImportInfoUpdateWithoutMeasureUnitsInput;
}
