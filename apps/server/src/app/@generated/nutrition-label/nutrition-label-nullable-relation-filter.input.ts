import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionLabelWhereInput } from './nutrition-label-where.input';

@InputType()
export class NutritionLabelNullableRelationFilter {

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    is?: NutritionLabelWhereInput;

    @Field(() => NutritionLabelWhereInput, {nullable:true})
    isNot?: NutritionLabelWhereInput;
}
