import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Food } from '../food/food.model';
import { MeasureUnit } from '../measure-unit/measure-unit.model';
import { ImportInfo } from '../import-info/import-info.model';

@ObjectType()
export class FoodPortion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    gramWeight!: number;

    @Field(() => String, {nullable:true})
    portionDescription!: string | null;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    measureUnitName!: string;

    @Field(() => String, {nullable:true})
    importInfoId!: string | null;

    @Field(() => Food, {nullable:false})
    food?: Food;

    @Field(() => MeasureUnit, {nullable:false})
    measureUnit?: MeasureUnit;

    @Field(() => ImportInfo, {nullable:true})
    importInfo?: ImportInfo | null;
}
