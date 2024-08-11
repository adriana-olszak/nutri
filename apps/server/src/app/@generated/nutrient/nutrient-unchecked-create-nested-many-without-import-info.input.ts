import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientCreateWithoutImportInfoInput } from './nutrient-create-without-import-info.input';
import { Type } from 'class-transformer';
import { NutrientCreateOrConnectWithoutImportInfoInput } from './nutrient-create-or-connect-without-import-info.input';
import { NutrientCreateManyImportInfoInputEnvelope } from './nutrient-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';

@InputType()
export class NutrientUncheckedCreateNestedManyWithoutImportInfoInput {

    @Field(() => [NutrientCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientCreateWithoutImportInfoInput)
    create?: Array<NutrientCreateWithoutImportInfoInput>;

    @Field(() => [NutrientCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => NutrientCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<NutrientCreateOrConnectWithoutImportInfoInput>;

    @Field(() => NutrientCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => NutrientCreateManyImportInfoInputEnvelope)
    createMany?: NutrientCreateManyImportInfoInputEnvelope;

    @Field(() => [NutrientWhereUniqueInput], {nullable:true})
    @Type(() => NutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>>;
}
