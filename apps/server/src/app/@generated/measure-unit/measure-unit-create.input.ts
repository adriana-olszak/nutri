import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateNestedManyWithoutMeasureUnitInput } from '../food-portion/food-portion-create-nested-many-without-measure-unit.input';
import { ImportInfoCreateNestedOneWithoutMeasureUnitsInput } from '../import-info/import-info-create-nested-one-without-measure-units.input';

@InputType()
export class MeasureUnitCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => FoodPortionCreateNestedManyWithoutMeasureUnitInput, {nullable:true})
    FoodPortion?: FoodPortionCreateNestedManyWithoutMeasureUnitInput;

    @Field(() => ImportInfoCreateNestedOneWithoutMeasureUnitsInput, {nullable:false})
    importInfo!: ImportInfoCreateNestedOneWithoutMeasureUnitsInput;
}
