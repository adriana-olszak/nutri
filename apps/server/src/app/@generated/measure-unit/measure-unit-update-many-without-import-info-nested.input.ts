import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitCreateWithoutImportInfoInput } from './measure-unit-create-without-import-info.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateOrConnectWithoutImportInfoInput } from './measure-unit-create-or-connect-without-import-info.input';
import { MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput } from './measure-unit-upsert-with-where-unique-without-import-info.input';
import { MeasureUnitCreateManyImportInfoInputEnvelope } from './measure-unit-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { MeasureUnitUpdateWithWhereUniqueWithoutImportInfoInput } from './measure-unit-update-with-where-unique-without-import-info.input';
import { MeasureUnitUpdateManyWithWhereWithoutImportInfoInput } from './measure-unit-update-many-with-where-without-import-info.input';
import { MeasureUnitScalarWhereInput } from './measure-unit-scalar-where.input';

@InputType()
export class MeasureUnitUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [MeasureUnitCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitCreateWithoutImportInfoInput)
    create?: Array<MeasureUnitCreateWithoutImportInfoInput>;

    @Field(() => [MeasureUnitCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<MeasureUnitCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<MeasureUnitUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => MeasureUnitCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => MeasureUnitCreateManyImportInfoInputEnvelope)
    createMany?: MeasureUnitCreateManyImportInfoInputEnvelope;

    @Field(() => [MeasureUnitWhereUniqueInput], {nullable:true})
    @Type(() => MeasureUnitWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>>;

    @Field(() => [MeasureUnitWhereUniqueInput], {nullable:true})
    @Type(() => MeasureUnitWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>>;

    @Field(() => [MeasureUnitWhereUniqueInput], {nullable:true})
    @Type(() => MeasureUnitWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>>;

    @Field(() => [MeasureUnitWhereUniqueInput], {nullable:true})
    @Type(() => MeasureUnitWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>>;

    @Field(() => [MeasureUnitUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<MeasureUnitUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [MeasureUnitUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => MeasureUnitUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<MeasureUnitUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [MeasureUnitScalarWhereInput], {nullable:true})
    @Type(() => MeasureUnitScalarWhereInput)
    deleteMany?: Array<MeasureUnitScalarWhereInput>;
}
