import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';
import { FoodPortionUpdateWithoutImportInfoInput } from './food-portion-update-without-import-info.input';

@InputType()
export class FoodPortionUpdateWithWhereUniqueWithoutImportInfoInput {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => FoodPortionUpdateWithoutImportInfoInput, {nullable:false})
    @Type(() => FoodPortionUpdateWithoutImportInfoInput)
    data!: FoodPortionUpdateWithoutImportInfoInput;
}
