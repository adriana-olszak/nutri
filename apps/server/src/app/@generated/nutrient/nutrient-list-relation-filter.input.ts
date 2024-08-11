import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';

@InputType()
export class NutrientListRelationFilter {

    @Field(() => NutrientWhereInput, {nullable:true})
    every?: NutrientWhereInput;

    @Field(() => NutrientWhereInput, {nullable:true})
    some?: NutrientWhereInput;

    @Field(() => NutrientWhereInput, {nullable:true})
    none?: NutrientWhereInput;
}
