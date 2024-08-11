import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { Type } from 'class-transformer';
import { MeasureUnitUpdateWithoutImportInfoInput } from './measure-unit-update-without-import-info.input';
import { MeasureUnitCreateWithoutImportInfoInput } from './measure-unit-create-without-import-info.input';

@InputType()
export class MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput {

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:false})
    @Type(() => MeasureUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;

    @Field(() => MeasureUnitUpdateWithoutImportInfoInput, {nullable:false})
    @Type(() => MeasureUnitUpdateWithoutImportInfoInput)
    update!: MeasureUnitUpdateWithoutImportInfoInput;

    @Field(() => MeasureUnitCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => MeasureUnitCreateWithoutImportInfoInput)
    create!: MeasureUnitCreateWithoutImportInfoInput;
}
