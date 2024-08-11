import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';

@InputType()
export class FoodCategoryListRelationFilter {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    every?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    some?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    none?: FoodCategoryWhereInput;
}
