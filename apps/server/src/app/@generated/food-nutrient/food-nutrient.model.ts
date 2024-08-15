import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Food } from '../food/food.model';
import { Nutrient } from '../nutrient/nutrient.model';
import { ImportInfo } from '../import-info/import-info.model';

@ObjectType()
export class FoodNutrient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    foodId!: string;

    @Field(() => String, {nullable:false})
    nutrientId!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:true})
    min!: number | null;

    @Field(() => Float, {nullable:true})
    median!: number | null;

    @Field(() => Float, {nullable:true})
    max!: number | null;

    @Field(() => String, {nullable:true})
    confidenceCode!: string | null;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:true})
    importInfoId!: string | null;

    @Field(() => Food, {nullable:false})
    food?: Food;

    @Field(() => Nutrient, {nullable:false})
    nutrient?: Nutrient;

    @Field(() => ImportInfo, {nullable:true})
    importInfo?: ImportInfo | null;
}
