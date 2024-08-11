import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionCreateNestedManyWithoutMeasureUnitInput } from '../food-portion/food-portion-create-nested-many-without-measure-unit.input';

@InputType()
export class MeasureUnitCreateWithoutImportInfoInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => FoodPortionCreateNestedManyWithoutMeasureUnitInput, {nullable:true})
    FoodPortion?: FoodPortionCreateNestedManyWithoutMeasureUnitInput;
}
