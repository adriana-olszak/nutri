import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitCreateWithoutImportInfoInput } from './measure-unit-create-without-import-info.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateOrConnectWithoutImportInfoInput } from './measure-unit-create-or-connect-without-import-info.input';
import { MeasureUnitCreateManyImportInfoInputEnvelope } from './measure-unit-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';

@InputType()
export class MeasureUnitCreateNestedManyWithoutImportInfoInput {

    @Field(() => [MeasureUnitCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitCreateWithoutImportInfoInput)
    create?: Array<MeasureUnitCreateWithoutImportInfoInput>;

    @Field(() => [MeasureUnitCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<MeasureUnitCreateOrConnectWithoutImportInfoInput>;

    @Field(() => MeasureUnitCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => MeasureUnitCreateManyImportInfoInputEnvelope)
    createMany?: MeasureUnitCreateManyImportInfoInputEnvelope;

    @Field(() => [MeasureUnitWhereUniqueInput], {nullable:true})
    @Type(() => MeasureUnitWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>>;
}
