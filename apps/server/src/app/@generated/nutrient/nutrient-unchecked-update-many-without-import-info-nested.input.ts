import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientCreateWithoutImportInfoInput } from './nutrient-create-without-import-info.input';
import { Type } from 'class-transformer';
import { NutrientCreateOrConnectWithoutImportInfoInput } from './nutrient-create-or-connect-without-import-info.input';
import { NutrientUpsertWithWhereUniqueWithoutImportInfoInput } from './nutrient-upsert-with-where-unique-without-import-info.input';
import { NutrientCreateManyImportInfoInputEnvelope } from './nutrient-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';
import { NutrientUpdateWithWhereUniqueWithoutImportInfoInput } from './nutrient-update-with-where-unique-without-import-info.input';
import { NutrientUpdateManyWithWhereWithoutImportInfoInput } from './nutrient-update-many-with-where-without-import-info.input';
import { NutrientScalarWhereInput } from './nutrient-scalar-where.input';

@InputType()
export class NutrientUncheckedUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [NutrientCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientCreateWithoutImportInfoInput)
    create?: Array<NutrientCreateWithoutImportInfoInput>;

    @Field(() => [NutrientCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<NutrientCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [NutrientUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<NutrientUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => NutrientCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => NutrientCreateManyImportInfoInputEnvelope)
    createMany?: NutrientCreateManyImportInfoInputEnvelope;

    @Field(() => [NutrientWhereUniqueInput], {nullable:true})
    @Type(() => NutrientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [NutrientWhereUniqueInput], {nullable:true})
    @Type(() => NutrientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [NutrientWhereUniqueInput], {nullable:true})
    @Type(() => NutrientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [NutrientWhereUniqueInput], {nullable:true})
    @Type(() => NutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>>;

    @Field(() => [NutrientUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<NutrientUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [NutrientUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<NutrientUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [NutrientScalarWhereInput], {nullable:true})
    @Type(() => NutrientScalarWhereInput)
    deleteMany?: Array<NutrientScalarWhereInput>;
}
