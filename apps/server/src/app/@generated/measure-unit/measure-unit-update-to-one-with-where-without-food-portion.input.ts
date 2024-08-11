import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasureUnitWhereInput } from './measure-unit-where.input';
import { Type } from 'class-transformer';
import { MeasureUnitUpdateWithoutFoodPortionInput } from './measure-unit-update-without-food-portion.input';

@InputType()
export class MeasureUnitUpdateToOneWithWhereWithoutFoodPortionInput {

    @Field(() => MeasureUnitWhereInput, {nullable:true})
    @Type(() => MeasureUnitWhereInput)
    where?: MeasureUnitWhereInput;

    @Field(() => MeasureUnitUpdateWithoutFoodPortionInput, {nullable:false})
    @Type(() => MeasureUnitUpdateWithoutFoodPortionInput)
    data!: MeasureUnitUpdateWithoutFoodPortionInput;
}
