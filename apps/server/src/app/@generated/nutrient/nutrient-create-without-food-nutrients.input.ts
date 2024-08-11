import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImportInfoCreateNestedOneWithoutNutrientsInput } from '../import-info/import-info-create-nested-one-without-nutrients.input';

@InputType()
export class NutrientCreateWithoutFoodNutrientsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    unitName!: string;

    @Field(() => String, {nullable:false})
    sourceId!: string;

    @Field(() => ImportInfoCreateNestedOneWithoutNutrientsInput, {nullable:false})
    importInfo!: ImportInfoCreateNestedOneWithoutNutrientsInput;
}
