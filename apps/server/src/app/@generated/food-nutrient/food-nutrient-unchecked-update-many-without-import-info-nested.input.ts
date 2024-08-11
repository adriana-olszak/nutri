import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateWithoutImportInfoInput } from './food-nutrient-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateOrConnectWithoutImportInfoInput } from './food-nutrient-create-or-connect-without-import-info.input';
import { FoodNutrientUpsertWithWhereUniqueWithoutImportInfoInput } from './food-nutrient-upsert-with-where-unique-without-import-info.input';
import { FoodNutrientCreateManyImportInfoInputEnvelope } from './food-nutrient-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';
import { FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput } from './food-nutrient-update-with-where-unique-without-import-info.input';
import { FoodNutrientUpdateManyWithWhereWithoutImportInfoInput } from './food-nutrient-update-many-with-where-without-import-info.input';
import { FoodNutrientScalarWhereInput } from './food-nutrient-scalar-where.input';

@InputType()
export class FoodNutrientUncheckedUpdateManyWithoutImportInfoNestedInput {

    @Field(() => [FoodNutrientCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientCreateWithoutImportInfoInput)
    create?: Array<FoodNutrientCreateWithoutImportInfoInput>;

    @Field(() => [FoodNutrientCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodNutrientCreateOrConnectWithoutImportInfoInput>;

    @Field(() => [FoodNutrientUpsertWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientUpsertWithWhereUniqueWithoutImportInfoInput)
    upsert?: Array<FoodNutrientUpsertWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => FoodNutrientCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodNutrientCreateManyImportInfoInputEnvelope)
    createMany?: FoodNutrientCreateManyImportInfoInputEnvelope;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;

    @Field(() => [FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput)
    update?: Array<FoodNutrientUpdateWithWhereUniqueWithoutImportInfoInput>;

    @Field(() => [FoodNutrientUpdateManyWithWhereWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientUpdateManyWithWhereWithoutImportInfoInput)
    updateMany?: Array<FoodNutrientUpdateManyWithWhereWithoutImportInfoInput>;

    @Field(() => [FoodNutrientScalarWhereInput], {nullable:true})
    @Type(() => FoodNutrientScalarWhereInput)
    deleteMany?: Array<FoodNutrientScalarWhereInput>;
}
