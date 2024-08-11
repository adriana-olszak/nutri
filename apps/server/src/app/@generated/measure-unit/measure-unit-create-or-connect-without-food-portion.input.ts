import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateWithoutFoodPortionInput } from './measure-unit-create-without-food-portion.input';

@InputType()
export class MeasureUnitCreateOrConnectWithoutFoodPortionInput {

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:false})
    @Type(() => MeasureUnitWhereUniqueInput)
    where!: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;

    @Field(() => MeasureUnitCreateWithoutFoodPortionInput, {nullable:false})
    @Type(() => MeasureUnitCreateWithoutFoodPortionInput)
    create!: MeasureUnitCreateWithoutFoodPortionInput;
}
