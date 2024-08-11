import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';

@InputType()
export class BrandedFoodNullableRelationFilter {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    is?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    isNot?: BrandedFoodWhereInput;
}
