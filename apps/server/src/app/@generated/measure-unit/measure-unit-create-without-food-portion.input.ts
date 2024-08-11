import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateNestedOneWithoutMeasureUnitsInput } from '../import-info/import-info-create-nested-one-without-measure-units.input';

@InputType()
export class MeasureUnitCreateWithoutFoodPortionInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ImportInfoCreateNestedOneWithoutMeasureUnitsInput, {nullable:false})
    importInfo!: ImportInfoCreateNestedOneWithoutMeasureUnitsInput;
}
