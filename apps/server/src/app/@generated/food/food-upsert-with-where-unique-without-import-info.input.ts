import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodWhereUniqueInput } from './food-where-unique.input';
import { Type } from 'class-transformer';
import { FoodUpdateWithoutImportInfoInput } from './food-update-without-import-info.input';
import { FoodCreateWithoutImportInfoInput } from './food-create-without-import-info.input';

@InputType()
export class FoodUpsertWithWhereUniqueWithoutImportInfoInput {

    @Field(() => FoodWhereUniqueInput, {nullable:false})
    @Type(() => FoodWhereUniqueInput)
    where!: Prisma.AtLeast<FoodWhereUniqueInput, 'id' | 'sourceId'>;

    @Field(() => FoodUpdateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodUpdateWithoutImportInfoInput)
    update!: FoodUpdateWithoutImportInfoInput;

    @Field(() => FoodCreateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodCreateWithoutImportInfoInput)
    create!: FoodCreateWithoutImportInfoInput;
}
