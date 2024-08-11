import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandedFoodWhereInput } from './branded-food-where.input';

@InputType()
export class BrandedFoodListRelationFilter {

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    every?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    some?: BrandedFoodWhereInput;

    @Field(() => BrandedFoodWhereInput, {nullable:true})
    none?: BrandedFoodWhereInput;
}
