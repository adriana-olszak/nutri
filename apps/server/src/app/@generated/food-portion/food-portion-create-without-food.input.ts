import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { MeasureUnitCreateNestedOneWithoutFoodPortionInput } from '../measure-unit/measure-unit-create-nested-one-without-food-portion.input';
import { ImportInfoCreateNestedOneWithoutFoodPortionsInput } from '../import-info/import-info-create-nested-one-without-food-portions.input';

@InputType()
export class FoodPortionCreateWithoutFoodInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    gramWeight!: number;

    @Field(() => String, {nullable:true})
    portionDescription?: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => MeasureUnitCreateNestedOneWithoutFoodPortionInput, {nullable:false})
    measureUnit!: MeasureUnitCreateNestedOneWithoutFoodPortionInput;

    @Field(() => ImportInfoCreateNestedOneWithoutFoodPortionsInput, {nullable:false})
    importInfo!: ImportInfoCreateNestedOneWithoutFoodPortionsInput;
}
