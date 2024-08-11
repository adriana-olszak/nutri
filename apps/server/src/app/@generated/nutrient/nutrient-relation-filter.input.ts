import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutrientWhereInput } from './nutrient-where.input';

@InputType()
export class NutrientRelationFilter {

    @Field(() => NutrientWhereInput, {nullable:true})
    is?: NutrientWhereInput;

    @Field(() => NutrientWhereInput, {nullable:true})
    isNot?: NutrientWhereInput;
}
