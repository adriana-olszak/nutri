import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodWhereInput } from './food-category-on-food-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFoodCategoryOnFoodArgs {

    @Field(() => FoodCategoryOnFoodWhereInput, {nullable:true})
    @Type(() => FoodCategoryOnFoodWhereInput)
    where?: FoodCategoryOnFoodWhereInput;
}
