import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodPortionUncheckedCreateNestedManyWithoutMeasureUnitInput } from '../food-portion/food-portion-unchecked-create-nested-many-without-measure-unit.input';

@InputType()
export class MeasureUnitUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    importInfoId?: string;

    @Field(() => FoodPortionUncheckedCreateNestedManyWithoutMeasureUnitInput, {nullable:true})
    FoodPortion?: FoodPortionUncheckedCreateNestedManyWithoutMeasureUnitInput;
}
