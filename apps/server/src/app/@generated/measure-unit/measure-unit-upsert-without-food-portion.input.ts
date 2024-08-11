import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitUpdateWithoutFoodPortionInput } from './measure-unit-update-without-food-portion.input';
import { Type } from 'class-transformer';
import { MeasureUnitCreateWithoutFoodPortionInput } from './measure-unit-create-without-food-portion.input';
import { MeasureUnitWhereInput } from './measure-unit-where.input';

@InputType()
export class MeasureUnitUpsertWithoutFoodPortionInput {

    @Field(() => MeasureUnitUpdateWithoutFoodPortionInput, {nullable:false})
    @Type(() => MeasureUnitUpdateWithoutFoodPortionInput)
    update!: MeasureUnitUpdateWithoutFoodPortionInput;

    @Field(() => MeasureUnitCreateWithoutFoodPortionInput, {nullable:false})
    @Type(() => MeasureUnitCreateWithoutFoodPortionInput)
    create!: MeasureUnitCreateWithoutFoodPortionInput;

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    @Type(() => MeasureUnitWhereInput)
    where?: MeasureUnitWhereInput;
}
