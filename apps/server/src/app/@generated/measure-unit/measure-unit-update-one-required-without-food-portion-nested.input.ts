import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitCreateWithoutFoodPortionInput } from './measure-unit-create-without-food-portion.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateOrConnectWithoutFoodPortionInput } from './measure-unit-create-or-connect-without-food-portion.input';
import { MeasureUnitUpsertWithoutFoodPortionInput } from './measure-unit-upsert-without-food-portion.input';
import { Prisma } from '@prisma/client';
import { MeasureUnitWhereUniqueInput } from './measure-unit-where-unique.input';
import { MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput } from './measure-unit-update-to-one-with-where-without-food-portion.input';

@InputType()
export class MeasureUnitUpdateOneRequiredWithoutFoodPortionNestedInput {

    @Field(() => MeasureUnitCreateWithoutFoodPortionInput, {nullable:true})
    @Type(() => MeasureUnitCreateWithoutFoodPortionInput)
    create?: MeasureUnitCreateWithoutFoodPortionInput;

    @Field(() => MeasureUnitCreateOrConnectWithoutFoodPortionInput, {nullable:true})
    @Type(() => MeasureUnitCreateOrConnectWithoutFoodPortionInput)
    connectOrCreate?: MeasureUnitCreateOrConnectWithoutFoodPortionInput;

    @Field(() => MeasureUnitUpsertWithoutFoodPortionInput, {nullable:true})
    @Type(() => MeasureUnitUpsertWithoutFoodPortionInput)
    upsert?: MeasureUnitUpsertWithoutFoodPortionInput;

    @Field(() => MeasureUnitWhereUniqueInput, {nullable:true})
    @Type(() => MeasureUnitWhereUniqueInput)
    connect?: Prisma.AtLeast<MeasureUnitWhereUniqueInput, 'name'>;

    @Field(() => MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput, {nullable:true})
    @Type(() => MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput)
    update?: MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput;
}
