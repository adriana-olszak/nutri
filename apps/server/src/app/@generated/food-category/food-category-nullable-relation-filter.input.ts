import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FoodCategoryWhereInput } from './food-category-where.input';

@InputType()
export class FoodCategoryNullableRelationFilter {

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    is?: FoodCategoryWhereInput;

    @Field(() => FoodCategoryWhereInput, {nullable:true})
    isNot?: FoodCategoryWhereInput;
}
