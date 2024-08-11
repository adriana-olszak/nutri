import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FoodCategoryCount {

    @Field(() => Int, {nullable:false})
    foods?: number;

    @Field(() => Int, {nullable:false})
    childCategories?: number;
}
