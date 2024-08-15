import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FoodNutrient } from '../food-nutrient/food-nutrient.model';
import { ImportInfo } from '../import-info/import-info.model';
import { NutrientCount } from './nutrient-count.output';

@ObjectType()
export class Nutrient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unitName!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => String, {nullable:true})
    importInfoId!: string | null;

    @Field(() => [FoodNutrient], {nullable:true})
    foodNutrients?: Array<FoodNutrient>;

    @Field(() => ImportInfo, {nullable:true})
    importInfo?: ImportInfo | null;

    @Field(() => NutrientCount, {nullable:false})
    _count?: NutrientCount;
}
