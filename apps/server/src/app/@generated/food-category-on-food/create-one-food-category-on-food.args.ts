import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FoodCategoryOnFoodCreateInput } from './food-category-on-food-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFoodCategoryOnFoodArgs {

    @Field(() => FoodCategoryOnFoodCreateInput, {nullable:false})
    @Type(() => FoodCategoryOnFoodCreateInput)
    data!: FoodCategoryOnFoodCreateInput;
}
