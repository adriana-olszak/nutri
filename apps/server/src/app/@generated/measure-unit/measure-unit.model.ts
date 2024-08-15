import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FoodPortion } from '../food-portion/food-portion.model';
import { ImportInfo } from '../import-info/import-info.model';
import { MeasureUnitCount } from './measure-unit-count.output';

@ObjectType()
export class MeasureUnit {

    @Field(() => ID, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    importInfoId!: string | null;

    @Field(() => [FoodPortion], {nullable:true})
    FoodPortion?: Array<FoodPortion>;

    @Field(() => ImportInfo, {nullable:true})
    importInfo?: ImportInfo | null;

    @Field(() => MeasureUnitCount, {nullable:false})
    _count?: MeasureUnitCount;
}
