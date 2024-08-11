import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FoodPortionWhereUniqueInput } from './food-portion-where-unique.input';
import { Type } from 'class-transformer';
import { FoodPortionUpdateWithoutMeasureUnitInput } from './food-portion-update-without-measure-unit.input';
import { FoodPortionCreateWithoutMeasureUnitInput } from './food-portion-create-without-measure-unit.input';

@InputType()
export class FoodPortionUpsertWithWhereUniqueWithoutMeasureUnitInput {

    @Field(() => FoodPortionWhereUniqueInput, {nullable:false})
    @Type(() => FoodPortionWhereUniqueInput)
    where!: Prisma.AtLeast<FoodPortionWhereUniqueInput, 'id'>;

    @Field(() => FoodPortionUpdateWithoutMeasureUnitInput, {nullable:false})
    @Type(() => FoodPortionUpdateWithoutMeasureUnitInput)
    update!: FoodPortionUpdateWithoutMeasureUnitInput;

    @Field(() => FoodPortionCreateWithoutMeasureUnitInput, {nullable:false})
    @Type(() => FoodPortionCreateWithoutMeasureUnitInput)
    create!: FoodPortionCreateWithoutMeasureUnitInput;
}
