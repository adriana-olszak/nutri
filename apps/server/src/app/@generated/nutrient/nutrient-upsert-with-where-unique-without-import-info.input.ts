import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutrientWhereUniqueInput } from './nutrient-where-unique.input';
import { Type } from 'class-transformer';
import { NutrientUpdateWithoutImportInfoInput } from './nutrient-update-without-import-info.input';
import { NutrientCreateWithoutImportInfoInput } from './nutrient-create-without-import-info.input';

@InputType()
export class NutrientUpsertWithWhereUniqueWithoutImportInfoInput {

    @Field(() => NutrientWhereUniqueInput, {nullable:false})
    @Type(() => NutrientWhereUniqueInput)
    where!: Prisma.AtLeast<NutrientWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => NutrientUpdateWithoutImportInfoInput, {nullable:false})
    @Type(() => NutrientUpdateWithoutImportInfoInput)
    update!: NutrientUpdateWithoutImportInfoInput;

    @Field(() => NutrientCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => NutrientCreateWithoutImportInfoInput)
    create!: NutrientCreateWithoutImportInfoInput;
}
