import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateWithoutImportInfoInput } from './measure-unit-create-without-import-info.input';

@InputType()
export class MeasureUnitCreateOrConnectWithoutImportInfoInput {

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:false})
    @Type(() => MeasureUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;

    @Field(() => MeasureUnitCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => MeasureUnitCreateWithoutImportInfoInput)
    create!: MeasureUnitCreateWithoutImportInfoInput;
}
