import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FoodCreateNestedOneWithoutPortionsInput } from '../food/food-create-nested-one-without-portions.input';
import { MeasureUnitCreateNestedOneWithoutFoodPortionInput } from '../measure-unit/measure-unit-create-nested-one-without-food-portion.input';

@InputType()
export class FoodPortionCreateWithoutImportInfoInput {

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

    @Field(() => FoodCreateNestedOneWithoutPortionsInput, {nullable:false})
    food!: FoodCreateNestedOneWithoutPortionsInput;

    @Field(() => MeasureUnitCreateNestedOneWithoutFoodPortionInput, {nullable:false})
    measureUnit!: MeasureUnitCreateNestedOneWithoutFoodPortionInput;
}
