import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodNutrientCreateWithoutImportInfoInput } from './food-nutrient-create-without-import-info.input';
import { Type } from 'class-transformer';
import { FoodNutrientCreateOrConnectWithoutImportInfoInput } from './food-nutrient-create-or-connect-without-import-info.input';
import { FoodNutrientCreateManyImportInfoInputEnvelope } from './food-nutrient-create-many-import-info-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FoodNutrientWhereUniqueInput } from './food-nutrient-where-unique.input';

@InputType()
export class FoodNutrientCreateNestedManyWithoutImportInfoInput {

    @Field(() => [FoodNutrientCreateWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientCreateWithoutImportInfoInput)
    create?: Array<FoodNutrientCreateWithoutImportInfoInput>;

    @Field(() => [FoodNutrientCreateOrConnectWithoutImportInfoInput], {nullable:true})
    @Type(() => FoodNutrientCreateOrConnectWithoutImportInfoInput)
    connectOrCreate?: Array<FoodNutrientCreateOrConnectWithoutImportInfoInput>;

    @Field(() => FoodNutrientCreateManyImportInfoInputEnvelope, {nullable:true})
    @Type(() => FoodNutrientCreateManyImportInfoInputEnvelope)
    createMany?: FoodNutrientCreateManyImportInfoInputEnvelope;

    @Field(() => [FoodNutrientWhereUniqueInput], {nullable:true})
    @Type(() => FoodNutrientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FoodNutrientWhereUniqueInput, 'id'>>;
}
